// markdown-parser.js

class MarkdownParser {
    parse(markdown) {
      // Headers
      markdown = markdown.replace(/^(#+)(.*)/gm, (match, hashes, text) => {
        const level = hashes.length;
        return `<h${level}>${text.trim()}</h${level}>`;
      });
  
      // Bold
      markdown = markdown.replace(/\*\*(.*?)\*\*/gm, '<strong>$1</strong>');
  
      // Italics
      markdown = markdown.replace(/\*(.*?)\*/gm, '<em>$1</em>');
  
      // Links
      markdown = markdown.replace(/\[([^\]]+)]\(([^)]+)\)/gm, '<a href="$2">$1</a>');
  
      // Inline code
      markdown = markdown.replace(/`(.*?)`/gm, '<code>$1</code>');
  
      // Paragraphs
      markdown = markdown.split('\n\n').map(paragraph => `<p>${paragraph.trim()}</p>`).join('');
  
      return markdown;
    }
  }
  
  module.exports = MarkdownParser;
  