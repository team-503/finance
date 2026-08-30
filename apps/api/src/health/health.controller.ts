import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, MemoryHealthIndicator } from '@nestjs/terminus'

const HEAP_LIMIT_BYTES = 256 * 1024 * 1024

@Controller('healthcheck')
export class HealthController {
    constructor(
        private readonly health: HealthCheckService,
        private readonly memory: MemoryHealthIndicator,
    ) {}

    @Get()
    @HealthCheck()
    check() {
        return this.health.check([() => this.memory.checkHeap('memory_heap', HEAP_LIMIT_BYTES)])
    }
}
