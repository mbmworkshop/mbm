<template>
  <nav class="bg-mbm-green p-0 fixed z-10 top-0 w-full">
    <div class="mx-auto container lg:flex lg:justify-start">
      <div class="lg:mx-0 flex items-center justify-between">
        <div>
          <a class="inline-flex items-center px-4 h-12 lg:h-16
                    focus:outline-none focus:underline text-gray-100 hover:text-white
                    hover:no-underline hover:bg-mbm-green-dark"
              href="/#top">
            <span class="my-auto font-extrabold text-3xl tracking-tight">
              MBM 2022
            </span>
          </a>
        </div>
        <div class="block lg:hidden">
          <button class="px-4 py-2
                        text-gray-300
                        hover:bg-mbm-green-dark
                        hover:text-white hover:border-white
                        focus:outline-none focus:text-white"
                  @click="isOpen = !isOpen">
            <svg class="h-8 w-8 fill-current " viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="lg:flex">
        <a v-for="section in sections" :key="section"
           :href="'/#' + section.replace(' ', '-').toLowerCase()"
           class="block text-lg text-gray-100 px-8 lg:px-4 py-2 lg:inline-flex lg:mt-0
                  lg:py-0 lg:items-center lg:h-16
                  focus:outline-none focus:underline
                  hover:bg-mbm-green-dark hover:text-white"
           @click="closeMenu">
          {{ section }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isOpen: false,
      sections: [
        'Format',
        'Program',
        'Invited Speakers',
        'Talks',
        'Posters',
        'Registration',
        'Sponsor',
        'Contact'
      ]
    }
  },
  methods: {
    closeMenu() {
      this.isOpen = false;
      return true;
    }
  }
}

</script>