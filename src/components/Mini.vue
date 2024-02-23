<template>
  <div>
    <div
      class="container mx-auto flex flex-col md:flex-row items-center lg:justify-between 
      lg:items-center bg-[#D4DCFF] gap-3 md:gap-0 rounded-xl p-6"
    >
      <div class="flex flex-col md:flex-row text-center md:text-start items-center  gap-3">
        <div class="">
          <img class="w-[180px] h-[180px] object-cover" src="../img/book.png" alt="" />
        </div>
        <div>
          <span class="bg-[#29A680] text-white rounded-lg mb-2 p-1"
            >100 000 so‘mlik sertifikatlar</span
          >
          <h3 class="text-3xl mb-3 max-w-[660px]">
            Praktikum Academy’dan sovg‘a sertifikati yaqinlaringizga bilim ulashing
          </h3>
          <p class="text-xl">Barcha yo'nalishlar bo'yicha 100 dan ortiq kurslar</p>
        </div>
      </div>
      <div>
        <button class="px-9 py-4 text-white bg-[#26292D] rounded-lg">
          Sertifikat olish uchun ariza bering
        </button>
      </div>
    </div>
    <div class="container mx-auto flex items-center flex-col md:flex-row md:justify-between
    bg-[#1F222E] rounded-2xl px-10 mt-10 overflow-hidden relative">
     <div class="max-w-[672px] *:text-white before:w-[700px] before:h-[300px]
      lg:before:w-[1300px] lg:before:h-[700px]
      before:bg-[#10C8A7] before:absolute before:left-[40%]  lg:before:left-2/4
       before:-translate-x-[42%] before:rounded-tl-[60%]
      before:rounded-tr-[40%] before:rounded-bl-[40%] before:rounded-br-[60%] before:top-[20px] 
      lg:before:-top-24 before:z-0 text-center md:text-start px-2 lg:px-0">
       <h3 class="mt-[48px] mb-6 text-3xl relative z-10">Yo‘nalish tanlashda yordam beramiz</h3>
       <p class="text-lg relative z-10">
         Mutaxassislarimiz sizning maqsadlaringiz va ko'nikmalaringizga mos keladigan
         o'quv dasturini tanlashda yordam berishlari uchun anketani to'ldiring
       </p>
       <button class="btn mt-5 text-lg  mb-3 lg:mb-0 relative bg-[#8D46F6] w-max">Anketa to’ldirish</button>
     </div>
     <div class="w-[483px] z-30">
       <img class="w-full object-cover" src="../img/yoga.png" alt="" />
     </div>
   </div>
  </div>
</template>
<script>
export default {};
</script>
