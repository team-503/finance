import { Module } from '@nestjs/common'
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino'
import type { IncomingMessage } from 'node:http'
import { env } from '../env/env.js'
import { REQUEST_LOG_IGNORED_PATHS } from './constants.js'

@Module({
    imports: [
        PinoLoggerModule.forRoot({
            pinoHttp: {
                level: env.LOG_LEVEL,
                transport: env.isDevelopment() ? { target: 'pino-pretty' } : undefined,
                autoLogging: {
                    ignore: (request: IncomingMessage) => REQUEST_LOG_IGNORED_PATHS.has(request.url ?? ''),
                },
            },
        }),
    ],
})
export class LoggerModule {}
