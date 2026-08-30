export const REQUEST_LOG_IGNORED_PATHS = new Set(['/healthcheck'])

export const PRETTY_IGNORED_FIELDS = 'pid,hostname,context'
export const PRETTY_MESSAGE_FORMAT = '{if context}[{context}] {end}{msg}'
