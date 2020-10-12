<template>
  <section class="mt-4 pb-4 border-b border-gray-400">
    <div id="registration" class="h-0 relative" style="bottom: 100px;"></div>
    <h2 class="section-header">Registration</h2>
    <p class="mt-2">
      You can participate at MBM 2020 by
    </p>
    <ul class="mt-2 px-8 list-disc">
      <li>giving a plenary talk,</li>
      <li>presenting a poster (i.e. a four-slide presentation),</li>
      <li>or simply as an observer.</li>
    </ul>
    <p class="mt-2">
      In the first two cases you will have to submit an <span class="font-semibold">abstract
      of max. 2000 characters</span>. Please note that the number of
      plenary speakers is limited. If you sign up for a talk but do not
      get selected for a plenary talk, you are welcome to present a shorter
      four-slide presentation during the poster session. The poster sessions
      will be held in parallel.
    </p>
    <p class="mt-2">
      As part of the goals for the workshop we will give preference to
      speakers on PhD and PostDoc level.
    </p>
    <p class="mt-2">
      Please note that you can edit your registration, which allows you
      to change your participation status.
    </p>
    <p class="mt-2">
      The <span class="font-semibold">registration deadline</span> is
    </p>
    <ul class="mt-2 px-8 list-disc">
      <li>
        for talks on September 25th
        (information about selection on September 28th),
      </li>
      <li>for posters on October 2nd, and</li>
      <li>for observers on October 14th.</li>
    </ul>
    <p class="mt-2">
      Participation in the digital workshop will be free of charge.
    </p>
    <form class="mt-4 flex flex-row justify-center items-center" 
          action="https://docs.google.com/forms/d/e/1FAIpQLSdJ46IknhSQdsHDNXNC_kOMwJ6-9t1JLqPy9FBlRtMCeAWU3w/viewform?usp=sf_link" 
          target="_blank">
      <input type="submit" 
              class="bg-mbm-green text-gray-100 font-semibold py-2 px-6 rounded
                    hover:bg-mbm-green-dark hover:text-white cursor-pointer shadow-md" 
              value="Register here" />
    </form>
  </section>
</template>

<script>
export default {
  name: 'Registration'
}
</script>