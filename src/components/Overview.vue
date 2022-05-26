
<template>
  <section class="mt-4">  <!-- lg:pb-4 lg:border-b lg:border-gray-400 w-full"> -->
    <div :id="id" class="h-0" style="bottom: 100px; position: relative;"></div>
    <h2 class="section-header">{{ $props.title }}</h2>

    <div class="mt-4 pb-4 border-b border-gray-400">
      <ul class="list-decimal">
        <LinkToPresenter v-for="edge in $props.collection.edges"
                         :key="edge.node.id"
                         :name="edge.node.name.first + ' ' + edge.node.name.last"
                         :affiliation="edge.node.affiliation"
                         :title="edge.node.content.title"
                         :prefix="id" />
      </ul>
    </div> 

    <!-- <div class="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-x-24">
      <Presenter v-for="edge in $props.collection.edges"
                 :key="edge.node.id"
                 :name="edge.node.name.first + ' ' + edge.node.name.last"
                 :title="edge.node.content.title"
                 :abstract="edge.node.content.abstract"
                 :prefix="id"
                  />
    </div> -->
  </section>
</template>

<script>
import Presenter from '~/components/Presenter.vue'
import LinkToPresenter from '~/components/LinkToPresenter.vue'

export default {
  name: 'Overview',
  props: ['title', 'collection'],
  computed: {
    id() {
      return this.title.toLowerCase()
    }
  },
  components: {
    Presenter,
    LinkToPresenter
  }
}
</script>