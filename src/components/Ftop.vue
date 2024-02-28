<template>
    <div>
        <div
        class="container mx-auto p-3 lg:p-11 bg-white rounded-3xl flex lg:justify-between justify-center flex-wrap lg:flex-nowrap gap-3"
      >
        <div class="lg:max-w-[410px] max-w-[520px] w-full">
          <h2 class="text-3xl font-medium mb-6">
            Biz barcha savollaringizni hal qilishda yordam beramiz
          </h2>
          <p>
            Agar siz Praktikum Academy haqida ko'proq bilmoqchi bo'lsangiz yoki qaysi o'quv
            dasturini tanlashni bilmasangiz, so'rov qoldiring, biz sizga qo'ng'iroq qilamiz
          </p>
        </div>
        <div class="max-w-[520px] w-fill">
          <form action="">
            <input type="text" class="input mb-4 w-full" placeholder="Ism sharif" />
            <div class="flex md:flex-nowrap flex-wrap">
              <input type="tel" class="input md:w-[50%] w-full" placeholder="Telefon" />
              <input
                type="email"
                class="input md:ml-4 mt-4 md:mt-0 md:w-[50%] w-full"
                placeholder="Elektron pochta"
              />
            </div>
            <button class="btn bg-[#3D3BFF] text-white mt-4">Yuborish</button>
          </form>
          <p class="mt-6 text-[#666666] text-xs">
            Tugmani bosish orqali men shaxsiy ma'lumotlarni
            <ins> qayta ishlashga va platformadan foydalanish qoidalariga</ins> rozilik
            bildiraman
          </p>
        </div>
      </div>
    </div>
</template>
<script setup>

</script>
