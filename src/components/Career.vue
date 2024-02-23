<template>
  <div>
    <div
      class="container mx-auto flex flex-col-reverse lg:flex-row  lg:justify-between items-center gap-5  bg-[#1F222E] p-4 md:p-[48px] rounded-3xl my-[30px] md:my-[80px]"
    >


      <div class="max-w-[586px] text-white text-center lg:text-start">
        <h2 class="text-[35px] md:text-[52px] mb-3  md:mb-[24px]">Karyera markazi</h2>
        <p class="md:text-lg mb-[48px]">
          Bu biz talabalarga ish topishda yordam beradigan joy. Biz sizga bo'sh ish
          o'rinlarini qidirish, rezyume yozish, portfolio yaratish, o'zingizni taqdim
          etish va suhbatdan o'tishni o'rgatamiz. Praktikum Karyera Markazida o'zingiz
          yoqtirgan ishni qanday topishni bilib oling.
        </p>
        <div class="flex gap-[60px] justify-center lg:justify-start">
          <span class="flex flex-col items-center lg:items-start">
            <Icon
              icon="bytesize:portfolio"
              class="bg-slate-300 rounded-lg p-3 text-black mb-2"
              width="57px"
              height="57px"
            />
            <p>
              751 nafar talaba <br />
              ishga joylashtirildi
            </p>
          </span>
          <span class="flex flex-col items-center lg:items-start">
            <Icon
              icon="icons8:student"
              class="bg-slate-300 rounded-lg p-3 text-black mb-2"
              width="63px"
              height="63px"
            />
            <p>
              Hozirda Karyera markazida <br />
              1046 nafar talaba tahsil olmoqda
            </p>
          </span>
        </div>
      </div>
      <div class="max-w-[500px] max-h-[400px] lg:w-[500px] lg:h-[400px] ">
        <img
          class="w-full h-full object-cover object-center"
          src="../img/market.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
