import type { ArgumentsHost } from '@nestjs/common'
import { Catch, HttpException, HttpStatus, Logger } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import type { Request, Response } from 'express'
import { INTERNAL_ERROR_BODY } from './constants.js'

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name)

    catch(exception: unknown, host: ArgumentsHost): void {
        if (exception instanceof HttpException) {
            super.catch(exception, host)
            return
        }

        const http = host.switchToHttp()
        const request = http.getRequest<Request>()

        this.logger.error(
            `Unhandled exception on ${request.method} ${request.url}`,
            exception instanceof Error ? exception.stack : exception,
        )

        http.getResponse<Response>().status(HttpStatus.INTERNAL_SERVER_ERROR).json(INTERNAL_ERROR_BODY)
    }
}
