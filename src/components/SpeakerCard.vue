<template>
  <div class="rounded-lg shadow-md bg-gray-100 px-2 py-2 lg:h-64 lg:pt-4">
    <div class="ml-2 sm:ml-0 flex items-center space-x-2 sm:justify-center">
      <div class="rounded-full h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 overflow-hidden">
        <g-image :src="require(`!!assets-loader!@/assets/${$props.image}`)" 
                :alt="$props.name" />
      </div>
      <h3 class="text-lg sm:text-xl lg:text-2xl font-medium">{{ $props.name }}</h3>  
    </div>
    <div class="body-text mt-2 text-gray-700 text-sm md:text-base">
      <Markdown :content="$props.description" />
    </div>
  </div>
</template>

<script>
import Markdown from '~/components/Markdown.vue'

export default {
  name: 'SpeakerCard',
  props: ['name', 'image', 'description'],
  components: {
    Markdown
  }
}
</script>