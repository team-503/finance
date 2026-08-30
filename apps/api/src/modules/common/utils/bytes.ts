import bytes from 'bytes'

export function parseBytes(value: string): number {
    const parsed = bytes.parse(value)

    if (parsed === null) throw new Error(`Invalid byte size: ${value}`)

    return parsed
}
