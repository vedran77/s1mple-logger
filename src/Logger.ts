import figures from 'figures';

import { LoggerOptions, LogLevel, LogMessage } from './@types/LoggerOptions';

class Logger {
	private readonly scope: string;
	private readonly types: Record<LogLevel, string>;
	private readonly colors: Record<LogLevel, string>;
	private readonly symbols: Record<LogLevel, string>;

	constructor(options?: LoggerOptions) {
		this.scope = options?.scope ?? '';
		this.types = options?.types ?? {
			[LogLevel.ERROR]: 'error',
			[LogLevel.WARN]: 'warn',
			[LogLevel.INFO]: 'info',
			[LogLevel.DEBUG]: 'debug',
		};
		this.colors = options?.colors ?? {
			[LogLevel.ERROR]: '\x1b[31m', // red
			[LogLevel.WARN]: '\x1b[33m', // yellow
			[LogLevel.INFO]: '\x1b[36m', // cyan
			[LogLevel.DEBUG]: '\x1b[35m', // magenta
		};
		this.symbols = options?.symbols ?? {
			[LogLevel.ERROR]: figures.cross,
			[LogLevel.WARN]: figures.warning,
			[LogLevel.INFO]: figures.info,
			[LogLevel.DEBUG]: figures.bullet,
		};
	}

	private log(level: LogLevel, message: string, scope?: string): void {
		const timestamp = new Date().toISOString();
		const logMessage: LogMessage = {
			level,
			message,
			scope: scope ?? this.scope,
			timestamp,
		};
		const type = this.types[level];
		const color = this.colors[level];
		const symbol = this.symbols[level];
		const formattedTimestamp = this.formatTimestamp(timestamp);

		console[type](`${color}[${formattedTimestamp}] ${symbol} [${logMessage.scope}] [${logMessage.level.toUpperCase()}] ${logMessage.message}\x1b[0m`);
	}

	private formatTimestamp(timestamp: string): string {
		const date: Date = new Date(timestamp);

		return date.toDateString();
	}

	error(message: string, scope?: string): void {
		this.log(LogLevel.ERROR, message, scope);
	}

	warn(message: string, scope?: string): void {
		this.log(LogLevel.WARN, message, scope);
	}

	info(message: string, scope?: string): void {
		this.log(LogLevel.INFO, message, scope);
	}

	debug(message: string, scope?: string): void {
		this.log(LogLevel.DEBUG, message, scope);
	}
}

export { Logger };
