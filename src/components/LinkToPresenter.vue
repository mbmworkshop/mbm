
<template>
  <li class="ml-8">
    <span class="font-semibold">{{ $props.name }}</span>,
    <span class="text-1">{{ $props.affiliation }}</span> 
    <pre></pre>
    <a :href="id" class="text-mbm-green hover:text-mbm-green-light">
      {{ $props.title }}
    </a>
  </li>
</template>

<script>
export default {
  name: 'LinkToPresenter',
  props: [
    'name', 'affiliation', 'title', 'prefix'
  ],
  computed: {
    id() {
      
      return '#' + this.prefix + '-' + this.name.toLowerCase().replace(' ', '-');
      
    }
  }
}

</script>