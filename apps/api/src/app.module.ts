import { Module } from '@nestjs/common'
import { ExceptionsModule } from './modules/exceptions/exceptions.module.js'
import { HealthModule } from './modules/health/health.module.js'
import { LoggerModule } from './modules/logger/logger.module.js'
import { RateLimitModule } from './modules/rate-limit/rate-limit.module.js'

@Module({
    imports: [LoggerModule, ExceptionsModule, RateLimitModule, HealthModule],
})
export class AppModule {}
