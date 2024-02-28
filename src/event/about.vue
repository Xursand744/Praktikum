<template>
  <div>
    <!-- top -->
    <div class="container p-5 md:p-16 lg:p-28 lg:mb-24 md:mb-14 mb-7 bg-beton rounded-3xl">
      <h2 class="text-black font-medium md:mb-10 mb-5 md:text-5xl text-2xl">
        Java-dasturchisi uchun kerakli barcha <br />
        ko‘nikmalarini o‘rgatamiz
      </h2>
      <div
        class="flex lg:justify-between justify-center gap-4 lg:gap-0 mb-8 md:mb-16 lg:mb-28 flex-wrap lg:flex-nowrap"
      >
        <!-- Java-dasturchi -->
        <div
          class="bg-white rounded-3xl w-[306px] flex items-center p-3 sm:p-0 justify-center flex-col"
        >
          <div>
            <img src="../img/about.png" alt="" />
          </div>
          <p class="text-sm text-[#A3A3A3]">Lavozim:</p>
          <h2 class="text-2xl font-medium">Java-dasturchi</h2>
        </div>
        <!-- Java-dasturchi -->
        <!-- Ko’nikmalar -->
        <div class="bg-white rounded-3xl lg:p-9 md:p-5 p-3 max-w-[792px] w-full">
          <p class="text-sm text-[#A3A3A3] md:mb-5 mb-3">Ko’nikmalar:</p>
          <div class="flex gap-x-9 flex-wrap sm:flex-nowrap">
            <div class="space-y-3 max-w-[344px] w-full">
              <p class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="rounded-full flex-shrink-0 mr-2 p-1 bg-emerald-500"
                  height="20"
                />
                Java-da veb-ilovalarni ishlab chiqish
              </p>

              <p class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="rounded-full flex-shrink-0 mr-2 p-1 bg-emerald-500"
                  height="20"
                />
                Fayl tizimi va ma'lumotlar bazalari bilan ishlash
              </p>

              <p class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="rounded-full flex-shrink-0 mr-2 p-1 bg-emerald-500"
                  height="20"
                />
                Ilovalarni testdan o’tkazish
              </p>

              <p class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="rounded-full flex-shrink-0 mr-2 p-1 bg-emerald-500"
                  height="20"
                />
                Ilovalarni dizayn patternlarini bilish va qo'llash
              </p>

              <p class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="flex-shrink-0 rounded-full mr-2 p-1 bg-emerald-500"
                  height="20"
                />
                Ob'ektga yo'naltirilgan dasturlash tamoyillarini bilish
              </p>
            </div>
            <div class="space-y-3 max-w-[344px] w-full">
              <p class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="p-1 rounded-full flex-shrink-0 mr-2 bg-emerald-500"
                  height="20"
                />
                Boshqa birovning kodini tushunish
              </p>

              <p class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="p-1 rounded-full flex-shrink-0 mr-2 bg-emerald-500"
                  height="20"
                />
                Muammolarni hal qilish uchun algoritmlardan foydalanish
              </p>

              <p class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="p-1 rounded-full flex-shrink-0 mr-2 bg-emerald-500"
                  height="20"
                />
                Git-versiyalarni boshqarish tizimi bilan ishlash
              </p>

              <p class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="p-1 rounded-full flex-shrink-0 mr-2 bg-emerald-500"
                  height="20"
                />
                Ko'p tarmoqli dasturlarni ishlab chiqish
              </p>

              <span class="flex font-medium">
                <Icon
                  icon="arcticons:simpletask"
                  width="20"
                  class="p-1 flex-shrink-0 rounded-full mr-2 bg-emerald-500"
                  height="20"
                />
                Scrum metodologiyasi bo'yicha taqsimlangan jamoada ishlashni bilish
              </span>
            </div>
          </div>
          <!-- Ko’nikmalar -->
          <!-- Texnologiyalar -->
          <div class="mt-9">
            <p class="text-sm text-[#A3A3A3] md:mb-5 mb-3">Texnologiyalar:</p>
            <div class="flex flex-wrap gap-3">
              <div
                v-for="texnol in texnols"
                class="flex gap-1.5 p-3 rounded-xl bg-beton w-max"
              >
                <img src="../img/texnologis.png" alt="" />
                <p>{{ texnol.name }}</p>
              </div>
            </div>
          </div>
          <!-- Texnologiyalar -->
        </div>
      </div>
      <!-- top -->
      <!-- buttom -->

      <div>
        <h2 class="mb-4 md:mb-9 lg:mb-14 lg:text-5xl font-medium md:text-3xl text-2xl">
          Portfoliongiz uchun katta loyiha
        </h2>
        <div class="flex justify-center gap-3 lg:gap-0 lg:justify-between flex-wrap  lg:flex-nowrap">
          <div class="py-8 px-16 bg-white rounded-2xl w-[642px]">
            <img class="w-full" src="../img/loiha.png" alt="" />
          </div>
          <div class="w-full lg:max-w-[392px] px-[32px] pt-[76px] pb-[48px] bg-white rounded-2xl">
            <h2 class="text-xl lg:text-3xl font-medium mb-4 lg:mb-8">Finance CRM</h2>
            <p class="text-[#666666] text-sm sm:text-lg">
              Investitsiya imkoniyatlarini tahlil qilish va xavflarni baholash uchun
              mustahkam moliyaviy modelni ishlab chiqish. Diskontlangan pul oqimi (DCF) va
              sezgirlik tahlilidan foydalangan holda, ushbu loyiha strategik qarorlar
              qabul qilish va moliyaviy rejalashtirish uchun qimmatli ma'lumotlarni taqdim
              etishga qaratilgan.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- buttom -->
    <div  class="">
      <Ftop class="lg:p-[100px] md:p-[40px] container p-[20px] rounded-2xl bg-[#F5BF6A]"/>
    </div>
  </div>
</template>
<script setup>
import Ftop from "../components/Ftop"
const texnols = ref([
  {
    name: "IntelliJ idea",
    imgs: "../img/texnologis.png",
  },
  {
    name: "MySQL",
    imgs: "../img/texnologis.png",
  },
  {
    name: "GitLab",
    imgs: "../img/texnologis.png",
  },
  {
    name: "Redis",
    imgs: "../img/texnologis.png",
  },
  {
    name: "HTML",
    imgs: "../img/texnologis.png",
  },
  {
    name: "CSS",
    imgs: "../img/texnologis.png",
  },
  {
    name: "Maven build",
    imgs: "../img/texnologis.png",
  },
  {
    name: "Spring Boot",
    imgs: "../img/texnologis.png",
  },
  {
    name: "Entity Framework",
    imgs: "../img/texnologis.png",
  },
  {
    name: "Docker",
    imgs: "../img/texnologis.png",
  },
  {
    name: "JUnit",
    imgs: "../img/texnologis.png",
  },
  {
    name: "Spring",
    imgs: "../img/texnologis.png",
  },
  {
    name: "MongoDB",
    imgs: "../img/texnologis.png",
  },
]);
</script>
