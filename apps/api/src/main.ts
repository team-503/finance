import './setup.js'

import { StandardSchemaValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'
import { config } from './modules/config/config.js'
import { env } from './modules/env/env.js'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.enableCors({ origin: config.cors.origins, credentials: true })
    app.useGlobalPipes(new StandardSchemaValidationPipe())

    await app.listen(env.PORT)
}

await bootstrap()
