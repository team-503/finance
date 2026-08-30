import { Module } from '@nestjs/common'
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino'
import type { IncomingMessage } from 'node:http'
import { env } from '../env/env.js'
import { PRETTY_IGNORED_FIELDS, PRETTY_MESSAGE_FORMAT, REQUEST_LOG_IGNORED_PATHS } from './constants.js'

@Module({
    imports: [
        PinoLoggerModule.forRoot({
            pinoHttp: {
                level: env.LOG_LEVEL,
                transport: env.isDevelopment()
                    ? {
                          target: 'pino-pretty',
                          options: {
                              ignore: PRETTY_IGNORED_FIELDS,
                              messageFormat: PRETTY_MESSAGE_FORMAT,
                          },
                      }
                    : undefined,
                autoLogging: {
                    ignore: (request: IncomingMessage) => REQUEST_LOG_IGNORED_PATHS.has(request.url ?? ''),
                },
            },
        }),
    ],
})
export class LoggerModule {}
