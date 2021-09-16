const hljs = require("highlight.js");
const md = require("markdown-it")({
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,        //자동으로 텍스트 Url를 링크를 링크로 만들건지 
  typographer: true,
  quotes: "“”‘’",
  highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
            const langU = lang.charAt(0).toUpperCase() + lang.slice(1);
          try {
            return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`;
          } catch (__) {}
      }
      return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});

module.exports = md;

