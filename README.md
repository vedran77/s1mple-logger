# s1mple-logger

s1mple-logger is a lightweight logging library for Node.js applications.

## Installation

To install s1mple-logger, use npm:

\`\`\`bash
npm install s1mple-logger
\`\`\`

## Usage

To use s1mple-logger in your Node.js application, first import it:

\`\`\`javascript
const logger = require('s1mple-logger');
\`\`\`

Then, use it to log messages at different levels:

\`\`\`javascript
logger.info('This is an information message');
logger.warn('This is a warning message');
logger.error('This is an error message');
\`\`\`

You can also set the log level using the \`setLevel\` method:

\`\`\`javascript
logger.setLevel('debug');
\`\`\`

By default, the log level is set to \`info\`.

## License

s1mple-logger is licensed under the MIT License.
