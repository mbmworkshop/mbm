<template>
  <section class="mt-4 lg:mt-12 pb-4 lg:pb-0 border-b lg:border-b-0 border-gray-400">
    <div class="h-0" style="bottom: 100px; position: relative;"></div>
    <div class="text-lg md:text-xl mb-4">
      <h3>
        <span class="font-semibold">{{ $props.name }}</span> <h3></h3>
        <span class="italic">{{ $props.title }}</span>
      </h3>
    </div>

  </section>
</template>

<script>
import Markdown from '~/components/Markdown.vue'

export default {
  name: 'KeynoteTalk',
  props: ['name', 'title'],
  components: {
    Markdown
  }
}
</script>