import nodeConfig from 'config'
import type z from 'zod'
import { deepFreeze } from '../common/utils/object.js'
import type { DeepReadonly } from '../common/utils/types.js'
import { configSchema } from './schema.js'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unsafe-declaration-merging
interface Config extends DeepReadonly<z.infer<typeof configSchema>> {}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class Config {
    constructor() {
        Object.assign(this, configSchema.parse(nodeConfig.util.toObject()))
        deepFreeze(this)
    }
}

export const config = new Config()
