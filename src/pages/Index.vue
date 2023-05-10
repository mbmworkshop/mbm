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
              In-person Workshop
            </p>
            <p class="xs:text-xl sm:text-2xl lg:text-3xl
                      text-center lg:text-left">
              <span class="font-semibold">Linköping 2023 </span>
            </p>
            <p class="xs:text-xl sm:text-2xl lg:text-3xl
                      text-center lg:text-left">
              <span class="font-semibold">May 15<sup>th</sup> to 17<sup>th</sup> </span>
            </p>
          </div>
        </div>
      </header>      

      <div class="mt-4 lg:grid lg:grid-flow-row lg:grid-rows-1 lg:grid-cols-2
                  lg:border-b lg:pb-4 border-gray-400">
        <section class="body-text border-b lg:border-b-0 lg:border-r pb-4 lg:pb-0 lg:pr-4 border-gray-400">
          <h2 class="section-header">The Workshop</h2>
          <p>
            We are pleased to invite you to our <span class="font-semibold">fourth Workshop on Modelling in Biology and Medicine (MBM 2023)</span>.
          </p>
          <p>
            We aim to gather all young researchers in Sweden working on modelling of biological systems. Our ambition is to give all participating PhD students and PostDocs the opportunity to present their work through an oral presentation or a poster. Further, we wish to provide an insight on how modelling in biology and medicine is practiced in academia and industry.
          </p>
        </section>
        <section class="body-text mt-4 lg:mt-0 lg:pl-4 border-b pb-4 lg:border-b-0 lg:pb-0 border-gray-400">
          <div id="format" class="h-0" style="bottom: 100px; position: relative;"></div>
          <h2 class="section-header">Format</h2>
          <p>
            The workshop will include both plenary presentation sessions for larger talks as well as smaller sessions for e.g. poster presentations and discussions.
          </p>
          <p>
            The exact technicalities will be made available for <span class="font-semibold">registered participants</span> closer to the date of the workshop. 
          </p>
          <p>
            We will keep the workshop physically in Linköping, to promote networking. <span class="font-semibold"></span>
          </p>
        </section>
      </div>

      <div class="mt-4 lg:grid lg:grid-flow-row lg:grid-rows-1 lg:grid-cols-1
                  lg:border-b lg:pb-4 border-gray-400 w-full">
        <section class="body-text">
          <h2 class="section-header">Venue</h2>
          <p>
            The workshop will be arranged at the University Hospital Campus in Linköping. More specificly, entrance 65, marked out in <a href="https://goo.gl/maps/nMtDDS3FgAgqfmw5A" target="_blank" ><u>Google maps</u></a>. 
          </p>
          <p>
            If you come to Linköping by public transport we recomend you to travel with <a href="https://www.ostgotatrafiken.se/linkopings-resecentrum/us-norra-entren/?walk=true" target="_blank" ><u>Östgötatrafiken</u></a>, going with a bus from the central station "Linköpings resecentrum" to "US norra entrén". 
          </p>
          <p>
            If you are using other means of transportation, it would be easiest to travel to the coordinate location 58.40230939062588, 15.621568767919038, or see these <a href="/directionsMBMLinkoping.pdf" target="_blank"> <u>instructions</u></a>.
          </p>
          <p>
            Some close by living options are <a href="https://www.nordicchoicehotels.se/hotell/sverige/linkoping/quality-hotel-ekoxen/" target="_blank" ><u>Hotel Ekoxen</u></a> and <a href="https://lvh.se/en/" target="_blank" ><u>Linköping's City Hotell</u></a>. 
          </p>

        </section>
        
      </div>
      

      <Program />
      <InvitedSpeakers />
      <Overview title="Talks" :collection="$static.talks"  />
      <Overview title="Posters" :collection="$static.posters" />
      <Registration />

      <div class="mt-4 lg:grid lg:grid-flow-row lg:grid-rows-1 lg:grid-cols-1 lg:border-b lg:pb-4 border-gray-400 w-full">
        <section class="body-text">
          <p align="center">
            If you want more of MBM - the talks from last year are available on this <a href="https://youtu.be/jKtz4tqRChA"><u>link</u></a> or down below.
          </p><br>
          <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/jKtz4tqRChA" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            style = "display:block; margin:auto">
          </iframe>
        </section>
      </div>

      <Sponsor />
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
      affiliation
      content {
        title
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
import Sponsor from '~/components/Sponsor.vue'
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
    Sponsor,
    Contact
  }
}
</script>
