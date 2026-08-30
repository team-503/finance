import 'dotenv/config'

import type z from 'zod'
import { NodeEnv } from '../common/dto/enums/node-env.js'
import { deepFreeze } from '../common/utils/object.js'
import type { DeepReadonly } from '../common/utils/types.js'
import { envSchema } from './schema.js'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-declaration-merging
interface Env extends DeepReadonly<z.infer<typeof envSchema>> {}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class Env {
    constructor() {
        Object.assign(this, envSchema.parse(process.env))
        deepFreeze(this)
    }

    isDevelopment(): boolean {
        return this.NODE_ENV === NodeEnv.DEVELOPMENT
    }

    isProduction(): boolean {
        return this.NODE_ENV === NodeEnv.PRODUCTION
    }

    isTest(): boolean {
        return this.NODE_ENV === NodeEnv.TEST
    }
}

export const env = new Env()
