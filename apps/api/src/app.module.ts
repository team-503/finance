import { Module } from '@nestjs/common'
import { HealthModule } from './modules/health/health.module.js'
import { RateLimitModule } from './modules/rate-limit/rate-limit.module.js'

@Module({
    imports: [RateLimitModule, HealthModule],
})
export class AppModule {}
