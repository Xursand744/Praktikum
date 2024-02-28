<template>
  <div>
    <div class="container z-[999] relative">
      <nav class="lg:flex w-full mb-6">
        <!-- logo -->
        <div class="flex justify-between items-center lg:flex-none">
          <NuxtLink to="/pages/Home.vue">
            <img src="../img/Frame.png" alt="" />
          </NuxtLink>
          <span class="lg:hidden" @click="toggle = !toggle">
            <Icon class="w-[20px] h-[20px] md:w-[30px] md:h-[30px] " icon="fontisto:nav-icon-a"/>
          </span>
        </div>
        <!-- logo -->
        <!-- list -->
        <div
          :class="toggle ? 'left-full' : '-left-full'"
          class="transition-shadow lg:flex lg:justify-between 
          lg:items-center fixed left-0 top-0 lg:static w-full 
          sm:w-[50%] bg-slate-100 lg:bg-white h-full text-center
           lg:text-start lg:w-full space-y-4 mx-auto lg:*:mx-0 lg:space-y-0 py-6 lg:p-0"
        >
          <div class="relative lg:hidden z-50">
            <Icon
              @click="toggle = !toggle"
              icon="ic:round-close"
              width="25"
              height="25"
              class="absolute right-3 -top-1"
            />
          </div>
          <ul
            class="text-[#8F93A3] lg:flex grid place-items-center gap-4 space-y-4 lg:space-y-0"
          >
            <li class="mx-auto lg:mx-0 *:inline-block">
              <div class="relative">
                <!-- Dropdown toggle button -->
                <button @click="show = !show" class="flex items-center p-2 rounded-md">
                  <span class="mr-2">Dropdown Menu</span>
                  <Icon icon="mingcute:down-line" width="20" height="20" />
                </button>
                <!-- Dropdown menu -->
                <div
                  v-show="show"
                  class="lg:absolute lg:left-2/4 lg:-translate-x-2/4 text-center bg-[#EFF0F5] text-[#8F93A3] py-2 mt-2 rounded-md shadow-xl w-40"
                >
                  <button
                    class="block px-4 py-2 mx-auto text-sm hover:bg-indigo-400 hover:text-indigo-100"
                  >
                    Java Script
                  </button>
                  <buttom
                    class="block px-4 py-2 text-sm mx-auto hover:bg-indigo-400 hover:text-indigo-100"
                  >
                    Java
                  </buttom>
                  <button
                    class="block px-4 py-2 text-sm mx-auto hover:bg-indigo-400 hover:text-indigo-100"
                  >
                    Python
                  </button>
                </div>
              </div>
            </li>
            <li>
              <button>Tadbirlar</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
          </ul>
          <ul class="lg:flex space-y-4 lg:space-y-0 items-center gap-x-2">
            <li>
              <button class="btn"><Icon icon="ph:bell" width="25" height="25" /></button>
            </li>
            <li>
              <button class="btn">Kirish</button>
            </li>
            <li>
              <button class="btn">Ro'yxatdan o'tish</button>
            </li>
          </ul>
        </div>
        <!-- list -->
      </nav>
    </div>
  </div>
</template>
<script setup>
const show = ref(false);
const toggle = ref(true);
</script>
