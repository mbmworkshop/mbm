<template>
  <section class="mt-4 lg:mt-12 pb-4 lg:pb-0 border-b lg:border-b-0 border-gray-400">
    <div :id="id"
         class="h-0" style="bottom: 100px; position: relative;"></div>
    <div class="text-lg md:text-xl mb-4">
      <h3>
        <span class="font-semibold">{{ $props.name }}</span> <h3></h3>
        <span class="text">{{ $props.affiliation }}</span>
        <span class="italic">{{ $props.title }}</span>
        
      </h3>
    </div>
    
    
    <div class="body-text speaker-description mb-8">
      <Markdown v-for="para in $props.abstract"
                :key="para"
                :content="para" />
    </div> 
  </section>
</template>

<script>
import Markdown from '~/components/Markdown.vue'

export default {
  name: 'Presenter',
  props: [
    'name', 'title', 'abstract', 'prefix'
  ],
  computed: {
    id() {
      return this.prefix + '-' + this.name.toLowerCase().replace(' ', '-')
    }
  },
  components: {
    Markdown
  }
}
</script>