export const PINO_REQUEST_LOG_IGNORED_PATHS = new Set(['/healthcheck'])

export const PINO_PRETTY_IGNORED_FIELDS = 'pid,hostname,context,responseTime'
export const PINO_PRETTY_MESSAGE_FORMAT = '{if context}[{context}] {end}{msg}'
