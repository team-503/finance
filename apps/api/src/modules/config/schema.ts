import { z } from 'zod'

export const configSchema = z
    .object({
        cors: z
            .object({
                origins: z.array(z.url()).min(1),
            })
            .strict(),
    })
    .strict()
