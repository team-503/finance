import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW } from './constants.js'

@Module({
    imports: [ThrottlerModule.forRoot([{ ttl: RATE_LIMIT_WINDOW, limit: RATE_LIMIT_MAX_REQUESTS }])],
    providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class RateLimitModule {}
