<template>
  <section class="mt-4 pb-4 border-b border-gray-400">
    <div id="invited-speakers" class="h-0" style="bottom: 100px; position: relative;"></div>
    <h2 class="section-header">Invited speakers</h2>

    <div class="mt-4 lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-x-24">
      <section v-for="edge in $static.invitedSpeakers.edges"
               :key="edge.node.id"
               class="mt-8">
        <SpeakerCard :name="edge.node.name.first + ' ' + edge.node.name.last"
                     :image="edge.node.image"
                     :description="edge.node.description" />
        <div class="body-text mt-4">
          <Markdown v-for="para in edge.node.bio" :key="para"
                    :content="para" />
        </div>
      </section>
    </div>

    <!-- Keynote abstracts -->
    <section class="mt-4 pb-4 border-b border-gray-400"></section> 	<!--  border -->
    <section class="mt-4 pb-4">
      <div id="Keynote talks" class="h-0" style="bottom: 100px; position: relative;"></div>
      <h2 class="section-header">Speaker presentations</h2>
    
      <div class="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-x-24">
        <section v-for="edge in $static.invitedSpeakers.edges"
                :key="edge.node.id">
          <KeynoteTalk  :name="edge.node.name.first + ' ' + edge.node.name.last"
                        :title="edge.node.title" />
          <div class="body-text mt-4">
            <Markdown v-for="para in edge.node.abstract" :key="para"
                      :content="para" />
          </div>
        </section>
      </div> 
    </section>
  </section>
</template>

<static-query>
query {
  invitedSpeakers: allInvitedSpeakers (sortBy: "order", order: ASC) {
  	edges {
      node {
        id
        name {
          first
          last
        }
        image
        description
        bio
        title
        abstract
      }
    }
  }
}
</static-query>

<script>
import Markdown from '~/components/Markdown.vue'
import SpeakerCard from '~/components/SpeakerCard.vue'
import KeynoteTalk from '~/components/KeynoteTalk.vue'

export default {
  name: 'InvitedSpeakers',
  components: {
    Markdown,
    SpeakerCard,
    KeynoteTalk
  }
}
</script>