export function deepFreeze<T>(value: T, seen = new WeakSet<object>()): T {
    if (value === null || typeof value !== 'object' || seen.has(value)) return value

    seen.add(value)
    Object.freeze(value)
    Object.values(value).forEach((item: unknown) => {
        deepFreeze(item, seen)
    })

    return value
}
