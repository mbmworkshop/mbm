<!--
<template>
  <li class="ml-8">
    <span class="font-semibold">{{ $props.name }}</span>,
    <a :href="id" class="text-mbm-green hover:text-mbm-green-light">
      {{ $props.title }}
    </a>
  </li>
</template>
-->

<template>
  <li class="ml-8">
    <span class="font-semibold">{{ $props.name }}</span>
  </li>
</template>

<script>
export default {
  name: 'LinkToPresenter',
  props: [
    'name', 'title', 'prefix'
  ],
  computed: {
    id() {
      
      return '#' + this.prefix + '-' + this.name.toLowerCase().replace(' ', '-');
      
    }
  }
}

</script>