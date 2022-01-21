<template>
  <Layout>
    <div class="container mx-auto mt-16 lg:mt-20 flex flex-wrap items-center px-4">
      <div id="top" class="h-0" style="bottom: 100px; position: relative;"></div>
      <header class="border-b pb-4 border-gray-400">
        <h1 class="mx-auto lg:mx-0 text-center lg:text-left font-bold
                  text-2xl xs:text-3xl sm:text-4xl lg:text-5xl
                  sm:w-3/4 md:w-9/12 lg:w-3/4 xl:w-7/12 
                  leading-tight sm:tracking-wide">
          Workshop on Modelling in Biology and Medicine
        </h1>
        <div class="lg:flex lg:space-x-8 lg:mt-4">
          <p class="xs:text-xl sm:text-2xl lg:text-3xl
                    text-center lg:text-left w-full lg:w-1/2 
                    mt-2 xs:mt-3 lg:mt-0">
            Bringing together young researchers in Sweden working on the border
            of mathematics, biology and medicine.
          </p>
          <div class="w-full lg:w-1/2 mt-2 xs:mt-3 lg:mt-0">
            <p class="xs:text-xl sm:text-2xl lg:text-3xl
                      text-center lg:text-left
                      text-mbm-red-light font-semibold">
              Hybrid Workshop
            </p>
            <p class="xs:text-xl sm:text-2xl lg:text-3xl
                      text-center lg:text-left">
              <span class="font-semibold">Linköping 2022 </span>
            </p>
            <p class="xs:text-xl sm:text-2xl lg:text-3xl
                      text-center lg:text-left">
              <span class="font-semibold">May 23<sup>th</sup></span> and 
              <span class="font-semibold">24<sup>th</sup></span>
            </p>
          </div>
        </div>
      </header>

      <div class="mt-4 lg:grid lg:grid-flow-row lg:grid-rows-1 lg:grid-cols-2
                  lg:border-b lg:pb-4 border-gray-400">
        <section class="body-text border-b lg:border-b-0 lg:border-r pb-4 lg:pb-0 lg:pr-4 border-gray-400">
          <h2 class="section-header">The Workshop</h2>
          <p>
            We are pleased to invite you to our <span class="font-semibold">second Workshop on Modelling in Biology and Medicine (MBM 2022)</span>.
          </p>
          <p>
            We aim to gather all young researchers in Sweden working on modelling of biological systems. Our ambition is to give all participating PhD students and PostDocs the opportunity to present their work through an oral presentation or a poster. Further, we wish to provide an insight on how modelling in biology and medicine is practiced in academia and industry.
          </p>
        </section>
        <section class="body-text mt-4 lg:mt-0 lg:pl-4 border-b pb-4 lg:border-b-0 lg:pb-0 border-gray-400">
          <div id="format" class="h-0" style="bottom: 100px; position: relative;"></div>
          <h2 class="section-header">Format</h2>
          <p>
            The workshop will be held in both plenary presentation sessions for larger talks as well as in smaller sessions for e.g. poster presentations and discussions.
          </p>
          <p>
            The exact technicalities will be made available for <span class="font-semibold">registered participants</span> closer to the date of the workshop. 
          </p>
          <p>
            We aim to keep the workshop physically in Linköping, to promote networking. <span class="font-semibold">However, we will consider the current recommendations when we get closer to the set date.</span>
          </p>
        </section>
      </div>
      
      <Program />
      <InvitedSpeakers />
      <Overview title="Talks" :collection="$static.talks"  />
      <Overview title="Posters" :collection="$static.posters" />
      <Registration />
      <Contact />      
    </div>
  </Layout>
</template>


<static-query>
query {
  talks: allOthers (sortBy: "order", order: ASC, 
    				 filter: { type: { eq: "talk" }}) {
		...contentFields
  }
  posters: allOthers (order: ASC, filter: { type: { eq: "poster" }}) {
		...contentFields
  }
}

fragment contentFields on OthersConnection {
	edges {
    node {
      id
      name {
        first
        last
      }
      content {
        title
        authors
        affiliations
        abstract
      }
    }
  }
}
</static-query>

<script>
import Program from '~/components/Program.vue'
import InvitedSpeakers from '~/components/InvitedSpeakers.vue'
import Overview from '~/components/Overview.vue'
import Registration from '~/components/Registration.vue'
import Contact from '~/components/Contact.vue'

export default {
  metaInfo: {
    title: 'MBM Workshop'
  },
  components: {
    Program,
    InvitedSpeakers,
    Overview,
    Registration,
    Contact
  }
}
</script>
