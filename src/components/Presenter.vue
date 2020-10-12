<template>
  <section class="mt-4 lg:mt-12 pb-4 lg:pb-0 border-b lg:border-b-0 border-gray-400">
    <div :id="id"
         class="h-0" style="bottom: 100px; position: relative;"></div>
    <div class="text-lg md:text-xl mb-4">
      <h3>
        <span class="font-semibold">{{ $props.name }}</span>,
        <span class="italic">{{ $props.title }}</span>
      </h3>
    </div>
    <div class="body-text speaker-description mb-8">
      <Markdown v-for="para in $props.abstract"
                :key="para"
                :content="para" />
    </div>
    <div class="font-thin text-sm md:text-base">
      <p class="mb-4">
        <span class="font-semibold">Authors:</span>
        {{ $props.authors }}
      </p>
      <p class="font-semibold">Affiliations:</p>
      <ul class="mb-2">
        <li v-for="affiliation in $props.affiliations"
            :key="affiliation">
          {{ affiliation }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Markdown from '~/components/Markdown.vue'

export default {
  name: 'Presenter',
  props: [
    'name', 'title', 'authors', 'affiliations', 'abstract', 'prefix'
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