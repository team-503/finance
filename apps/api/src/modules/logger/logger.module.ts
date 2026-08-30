import { Module } from '@nestjs/common'
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { env } from '../env/env.js'
import { PINO_PRETTY_IGNORED_FIELDS, PINO_PRETTY_MESSAGE_FORMAT, PINO_REQUEST_LOG_IGNORED_PATHS } from './constants.js'

function successMessage(request: IncomingMessage, response: ServerResponse, responseTime: number): string {
    return `${request.method} ${request.url} ${response.statusCode} ${responseTime}ms`
}

function errorMessage(request: IncomingMessage, response: ServerResponse): string {
    return `${request.method} ${request.url} ${response.statusCode}`
}

@Module({
    imports: [
        PinoLoggerModule.forRoot({
            pinoHttp: {
                level: env.LOG_LEVEL,
                transport: env.isDevelopment()
                    ? {
                          target: 'pino-pretty',
                          options: {
                              ignore: PINO_PRETTY_IGNORED_FIELDS,
                              messageFormat: PINO_PRETTY_MESSAGE_FORMAT,
                          },
                      }
                    : undefined,
                autoLogging: {
                    ignore: (request: IncomingMessage) => PINO_REQUEST_LOG_IGNORED_PATHS.has(request.url ?? ''),
                },
                serializers: {
                    req: () => undefined,
                    res: () => undefined,
                },
                customSuccessMessage: successMessage,
                customErrorMessage: errorMessage,
            },
        }),
    ],
})
export class LoggerModule {}
