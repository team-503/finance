import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, MemoryHealthIndicator } from '@nestjs/terminus'
import { SkipThrottle } from '@nestjs/throttler'
import { HEAP_LIMIT } from './constants.js'

@SkipThrottle()
@Controller('healthcheck')
export class HealthController {
    constructor(
        private readonly health: HealthCheckService,
        private readonly memory: MemoryHealthIndicator,
    ) {}

    @Get()
    @HealthCheck()
    check() {
        return this.health.check([() => this.memory.checkHeap('memory_heap', HEAP_LIMIT)])
    }
}
