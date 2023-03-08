enum LogLevel {
	ERROR = 'error',
	WARN = 'warn',
	INFO = 'info',
	DEBUG = 'debug',
}

interface LoggerOptions {
	scope?: string;
	types?: Record<LogLevel, string>;
	colors?: Record<LogLevel, string>;
	symbols?: Record<LogLevel, string>;
	timestampFormat?: string;
}

interface LogMessage {
	level: LogLevel;
	message: string;
	scope?: string;
	timestamp: string;
}

export { LogLevel, LoggerOptions, LogMessage };
