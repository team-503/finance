import { Module } from '@nestjs/common'
import { HealthModule } from './modules/health/health.module.js'
import { LoggerModule } from './modules/logger/logger.module.js'
import { RateLimitModule } from './modules/rate-limit/rate-limit.module.js'

@Module({
    imports: [LoggerModule, RateLimitModule, HealthModule],
})
export class AppModule {}
