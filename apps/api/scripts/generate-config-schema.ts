import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { z } from 'zod'
import { configSchema } from '../src/modules/config/schema.ts'

const OUT_FILE = resolve(import.meta.dirname, '../schemas/config.schema.json')

const schema = z.toJSONSchema(configSchema.partial(), { io: 'input' }) as Record<string, unknown>
schema.title = 'finance api config'
schema.description =
    'Generated from src/modules/config/schema.ts. Do not edit by hand — run `pnpm generate:config-schema`.'

await mkdir(dirname(OUT_FILE), { recursive: true })
await writeFile(OUT_FILE, `${JSON.stringify(schema, null, 4)}\n`, 'utf8')
