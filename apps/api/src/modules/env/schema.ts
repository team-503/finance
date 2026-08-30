import { z } from 'zod'
import { NodeEnv } from '../common/dto/enums/node-env.js'

export const envSchema = z.object({
    NODE_ENV: z.enum(NodeEnv).default(NodeEnv.DEVELOPMENT),
    PORT: z.coerce.number().int().positive().default(4000),
})
