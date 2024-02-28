<template>
  <Navbar />
  <div class="mb-5 md:mb-10 lg:mb-20">
    <div
      class="container bg-[#1F222E] p-4 md:py-[34px] md:px-[34px] lg:py-[64px] lg:px-[100px] rounded-3xl"
    >
      <div
        class="flex md:justify-between justify-center text-center md:text-start mb-6 md:mb-0 flex-wrap-reverse md:flex-nowrap"
      >
        <div class="text-white">
          <p class="md:text-lg mb-4 md:mb-6">10 oy ichida yangi ish</p>
          <h2 class="text-2xl md:text-6xl font-semibold mb-7 md:mb-14">
            Java - dasturchi <br />
            kasbi
          </h2>
          <button class="btn bg-[#3D3BFF]">Chegirmani qo'lga kiritish</button>
        </div>
        <div class="max-w-[468px] max-h-[468px]">
          <img class="w-full h-full" src="../img/java.png" alt="" />
        </div>
      </div>
      <div class="flex justify-center md:justify-between gap-2 flex-wrap md:flex-nowrap">
        <div class="p-5 w-[286px] text-black bg-white rounded-xl">
          <h2 class="text-lg font-medium">Tajribali spikerlar</h2>
          <p class="text-sm mt-2">Payme, Click, Agrobank'dan professional dasturchilar</p>
        </div>
        <div class="p-5 w-[286px] text-black bg-white rounded-xl">
          <h2 class="text-lg font-[500]">Ish bilan ta’minlash</h2>
          <p class="text-sm mt-2">
            Kuchli rezume, hamkorlardan vakansiyalar va ulardan ish taklif qilinishi
            kafolatlanadi
          </p>
        </div>
        <div class="p-5 w-[286px] text-black bg-white rounded-xl">
          <h2 class="text-lg font-[500]">Jamoaviy loyiha</h2>
          <p class="text-sm mt-2">Jamoaviy ishlash amaliy tajribasi</p>
        </div>
        <div class="p-5 w-[286px] text-black bg-[#FFF705] rounded-xl">
          <h2 class="text-lg font-[500]">-40%</h2>
          <p class="text-sm mt-2">Chegirma amal qilish muddati 2 kun va 16:46:07</p>
        </div>
      </div>
    </div>
    <!-- banner bottom -->
    <div
      class="container flex justify-center lg:justify-between gap-3 
      lg:mt-[100px] md:mt-[60px] sm:mt-[30px] lg:flex-nowrap flex-wrap ">
      <div class="max-w-[570px] w-full text-center lg:text-start">
        <h2 class="text-2xl mt-3 md:mt-0 md:text-5xl leading-9 font-medium text-[#222222B2]">
          So‘nggi 20 yildagi <span class="text-blue-500">eng</span> mashhur dasturlash tilini o'rganing
        </h2>
        <p class="text-sm md:text-xl text-black mt-4 md:mt-9 lg:mt-[61px]">
          Java tilida mobil dasturlar yaratish, aqlli qurilmalarga kod yozish, web
          dasturlar va saytlarni «Back-End»ini yozishda foydalanishadi. Java yordamida
          eBay, Amazon, Facebook, Twitter, PayPal, Minecraft va hattoki Pentagon sayti
          yozilgan
        </p>
      </div>
      <div class="max-w-[623px] max-h-[351px]">
        <img class="w-full h-full" src="../img/java nini.png" alt="" />
      </div>
    </div>
    <!-- banner bottom -->
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar";
</script>
