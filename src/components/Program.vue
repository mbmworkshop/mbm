
<template>
  <section class="mt-4 border-b border-gray-400 pb-4 w-full">
    <div id="program" class="h-0" style="bottom: 100px; position: relative;"></div>
    <h2 class="section-header">Program</h2>
    <div class="flex flex-col lg:flex-row pt-2 pb-4">
      <div v-for="edge in $static.program.edges" :key="edge.node.id"
            class="px-4 w-full lg:w-1/2 flex flex-col">
        <h3 class="mt-2 sm:text-lg font-semibold">Day {{ edge.node.day }}</h3>
        <table class="mt-4 table-fixed w-full">
          <thead>
            <tr>
              <th class="w-1/6 text-center font-semibold">Time</th>
              <th class="w-5/6 px-4 text-left font-semibold">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in edge.node.program" :key="event.time"
                v-bind:class="{ 'bg-mbm-green-light': event.highlight }"
                class="border-t border-gray-400">
              <td class="py-2 text-center">{{ event.time }}</td>
              <td class="py-2 px-4">
                <span v-bind:class="{ 'text-gray-600 italic': event.break,
                                      'font-semibold': event.talk }">
                  {{ event.activity }}
                </span>
                <span v-if="event.invited" class="text-sm lg:text-base text-gray-600 italic">
                  (Invited speaker)
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>      
  </section>
</template>



<static-query>
query {
  program: allProgram (sortBy: "day", order: ASC) {
  	edges {
      node {
        id
        day
        program {
          time
          activity
          break
          talk
          highlight
          invited  
        }
      }
    }
  }
}
</static-query>


<script>
export default {
  name: 'Program',
}
</script>