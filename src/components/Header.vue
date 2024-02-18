<template>
  <div>
    <div
      class="container mx-auto lg:mt-16 flex lg:flex-row lg:items-end lg:justify-between text-center lg:text-start flex-col items-center"
    >
      <div class="max-w-[745px] flex flex-col items-center lg:items-start">
        <h1 class="text-2xl md:text-5xl mb-7 font-medium max-w-[607px]">
          Zamonaviy kasblarni
          <span class="text-[#1371AF] inline-block">amaliyot</span> bilan o‘rganing
        </h1>
        <p class="text-sm md:text-lg lg:mb-12 sm:mb-9 mb-6">
          Biz sizga yangi ish joyini kafolatlaymiz va ish topishingizga yordam beramiz
        </p>
        <div class="flex flex-wrap justify-center gap-3 lg:justify-normal">
          <span
            class="py-3 text-sm md:text-lg px-5 inline w-max border rounded-[66px]"
            v-for="plural in plurals"
            >{{ plural }}</span
          >
        </div>
        <form action="" class="w-full">
          <div
            class="w-full flex-wrap lg:flex-nowrap justify-center lg:justify-start flex gap-2 lg:mt-16 sm:mt-10 mt-6"
          >
            <input
              class="w-[80%] border p-4 rounded-2xl"
              type="text"
              placeholder="Qanday kursni izlayapsiz?"
            />
            <button class="btn w-[201px]">Kursni qidirish</button>
          </div>
        </form>
      </div>
      <div class="lg:w-[636px] lg:h-[445px] sm:w-[436px] sm:h-[225] w-[336] h-[125]">
        <img class="h-full w-full" src="../img/banner.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
const plurals = ref([
  "Barcha yo'nalishlar",
  "IT",
  "Dasturlash",
  "Analitika",
  "Machine Learning",
  "Machine Learning",
  "Testlash",
  "IT-arxitektura",
  "Blockchain",
  "Mahsulot va loyihalar",
  "Marketing",
  "O’yinlar",
  "Dizayn",
  "SMM",
]);
</script>
