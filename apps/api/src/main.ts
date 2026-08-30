import './setup.js'

import { StandardSchemaValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { Logger } from 'nestjs-pino'
import { AppModule } from './app.module.js'
import { config } from './modules/config/config.js'
import { env } from './modules/env/env.js'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { bufferLogs: true })

    app.useLogger(app.get(Logger))
    app.enableCors({ origin: config.cors.origins, credentials: true })
    app.useGlobalPipes(new StandardSchemaValidationPipe())
    app.enableShutdownHooks()

    await app.listen(env.PORT)
}

await bootstrap()
