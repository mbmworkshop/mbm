<template>
  <section class="mt-4 pb-4 border-b border-gray-400">
    <div id="registration" class="h-0 relative" style="bottom: 100px;"></div>
    <h2 class="section-header">Registration</h2>
    <p class="mt-2">
      You can participate at MBM 2023 by
    </p>
    <ul class="mt-2 px-8 list-disc">
      <li>giving a plenary talk,</li>
      <li>presenting a poster,</li>
      <li>or simply as an observer.</li>
    </ul>
  
    <p class="mt-2">
      In the first two cases you will have to submit an <span class="font-semibold">abstract
      of max. 2000 characters</span>. Please note that the number of
      plenary speakers is limited. If you sign up for a talk but do not
      get selected for a plenary talk, you are welcome to present a poster 
      during the poster session.
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
      <li>for talks and posters on April 14th</li>
      <li>for observers on April 28th</li>
      <br />
    </ul> 
    <p class="mt-2">
      Participation will require a fee of 200 SEK*. <br />
      Participation at the dinner will require an additional fee of 500 SEK, payment information can be found below: <br /><br />

      From within Sweden:<br />
      Bank giro: 5050-0016<br />
      State "17016, project 995631, MBM" as reference <br /><br />

      From abroad:<br />
      Danske Bank, P.O. Box 7523, SE-103 92 Stockholm, Sweden<br />
      Account number 1281 01 17 713<br />
      BIC/SWIFT: DABASESX<br />
      IBAN: SE13 1200 0000 0128 1011 7713<br />
      State "17016, project 995631, MBM" as reference<br /><br />

      *This do not apply for MSc or undergraduate students.
    </p>

    <!-- poster/talk registration  -->
    <div  style="width:50%; margin:auto;">
      <div style="display:inline-block; width:50%;text-align:center;">
        <form class="mt-4 flex flex-row justify-center items-center" 
              action="https://forms.gle/KoCo686JZSrvBdA89" 
              target="_blank">
          <input type="submit" 
                class="bg-mbm-green text-gray-100 font-semibold py-2 px-6 rounded
                      hover:bg-mbm-green-dark hover:text-white cursor-pointer shadow-md" 
                value="Submit a talk or poster" />
        </form>
      </div>

      <!-- participation registration
      action non-clickable button: "javascript:void(0)" -->
      <div style="display:inline-block; width:50%;text-align:center;">
        <form class="mt-4 flex flex-row justify-center items-center" 
              action="https://forms.gle/R4QChkWsk7qBaXcX7"
              target="_blank">
          <input type="submit" 
                class="bg-mbm-green text-gray-100 font-semibold py-2 px-6 rounded
                    hover:bg-mbm-green-dark hover:text-white cursor-pointer shadow-md" 
                value="      Register for MBM      " />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Registration'
}
</script>