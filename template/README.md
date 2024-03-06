# Markdown Parser

This is a simple Markdown parser written in JavaScript. It converts Markdown syntax into HTML.

## Installation

You can install the Markdown Parser package via npm:

```bash
npm install markdown-parser
```

## Usage

```javascript
const MarkdownParser = require('markdown-parser');

const parser = new MarkdownParser();

const markdown = `
# Hello, World!

This is a **Markdown Parser** in *JavaScript*.

[Check it out on GitHub](https://github.com)

\`npm install markdown-parser\`
`;

console.log(parser.parse(markdown));
```

## Supported Syntax

- Headers (e.g., #, ##, ###)
- Bold text (e.g., **bold**)
- Italics (e.g., *italics*)
- Links (e.g., [link](https://example.com))
- Inline code (e.g., \`code\`)
- Paragraphs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
