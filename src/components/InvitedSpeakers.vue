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
      }
    }
  }
}
</static-query>

<script>
import Markdown from '~/components/Markdown.vue'
import SpeakerCard from '~/components/SpeakerCard.vue'

export default {
  name: 'InvitedSpeakers',
  components: {
    Markdown,
    SpeakerCard
  }
}
</script>