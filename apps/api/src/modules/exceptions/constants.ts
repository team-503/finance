import { HttpException, HttpStatus } from '@nestjs/common'

export const INTERNAL_ERROR_BODY = HttpException.createBody(
    'Internal server error',
    'Internal Server Error',
    HttpStatus.INTERNAL_SERVER_ERROR,
)
