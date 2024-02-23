<template>
  <div>
    <div
      class="container mx-auto bg-[url('../img/bg.png')] bg-cover bg-[20%] rounded-2xl overflow-hidden my-20"
    >
      <div class="p-10 flex justify-center gap-9 lg:gap-0 text-center lg:text-start lg:justify-between items-center lg:flex-nowrap flex-wrap">
        <div class="relative block">
          <h3 class="text-3xl md:text-[44px] text-black relative">
            Agar sizda sertifikat
            <div class=" mb-4 md:mt-3">
                bo‘lsa —
                <span
                class="mt-4 before:block before:absolute before:-inset-x-5 before:-inset-y-1  before:-skew-y-1 before:rounded-full before:bg-white relative inline-block"
                >
                <span class="relative text-black">uni tekshirishingiz mumkin</span>
            </span>
        </div> 
          </h3>
          <p class="md:text-xl text-black max-w-[538px]">
            Ushbu sertifikat orqali bizning o’quv markazimizda o’qish uchun chegirma
            qo’lga kiritishingiz mumkun
          </p>
        </div>
        <div class="bg-white p-10 w-[380px] rounded-2xl">
          <form action="" class="flex flex-col">
            <input
              type="text"
              class="outline-none py-3 px-5 border rounded-lg mb-2.5"
              placeholder="Sertifikat raqami"
            />
            <button class="btn bg-[#27292D] text-white">Sertifikatni tekshirish</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
