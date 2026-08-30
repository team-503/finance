import { z } from 'zod'

export type Env = z.infer<typeof envSchema>

export const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().int().positive().default(4000),
})
