<template>
  <div v-html="html"></div>
</template>

<script>
const showdown = require('showdown'),
      converter = new showdown.Converter();
const HTMLParser = require('node-html-parser');

export default {
  name: "Markdown",
  props: [
    'content'
  ],
  computed: {
    html() {
      const rawHtml = converter.makeHtml(this.content);
      const html = HTMLParser.parse(rawHtml);
      html.querySelectorAll('a').forEach(anchor => {
        anchor.setAttribute('rel', 'noreferrer noopener');
        anchor.setAttribute('target', '_blank');
      });
      return html.toString();
    }
  }
}
</script>
