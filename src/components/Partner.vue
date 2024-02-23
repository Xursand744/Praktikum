<template>
  <div>
    <div class="container mx-auto mb-10 md:mb-16 lg:mb-24  ">
      <div class="max-w-[590px] w-full">
        <h2 class="md:text-5xl text-xl md:mb-6 mb-2">Yetakchi kompaniyalar bilan hamkorlik qilamiz</h2>
        <p class="md:text-lg text-sm">
          Sohadagi eng yaxshi ish o'rinlarini to'playmiz, intervyularga tayyorgarlik
          ko'ramiz va sizni hamkor kompaniyalarimizga tavsiya qilamiz.
        </p>
      </div>
      <div class="grid grid-cols-2 grid-rows-5 sm:grid-cols-3 mt-9 lg:mt-12
       sm:grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-10">
        <div class="w-[100px] h-[100px] mx-auto" v-for="logo in logos"  key="logo.id" >
            <img class="w-full h-full" :src="logo.img" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const logos = [
  { id: 1, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 2, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 3, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 4, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 5, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 6, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 7, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 8, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 9, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 10, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 11, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },
  { id: 12, img:new URL("../img/portnor/Vector (1).png", import.meta.url) },

];
</script>
