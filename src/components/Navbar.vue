<template>
  <div
    class="w-full h-full top-0 left-0 inset-0 md:static"
    :class="toggle ? 'static' : 'tog'"
  >
    <div class="container mx-auto flex flex-col md:flex-row">
      <div class="flex justify-between items-center md:flex-none">
        <button class="mb-12 w-max md:mb-0"><img src="../img/Frame.png" alt="" /></button>
        <button @click="toggle = !toggle" class="md:hidden mb-12 md:mb-0 cursor-pointer">
          X
        </button>
      </div>
      <div
        class="flex flex-col items-center md:justify-between py-4 md:py-4 transition-all md:flex-row gap-10 absolute -top-full left-[50%] translate-x-[-50%] md:translate-x-0 mt-[88px] md:mt-0 bg-slate-300 md:bg-white w-full md:static"
        :class="toggle ? '-top-full' : 'top-0'"
      >
        <ul class="flex flex-col gap-10 md:flex-row md:items-center md:gap-3">
          <button class="nav">Kurslar katalogi</button>
          <button class="nav">Tadbirlar</button>
          <button class="nav">Blog</button>
        </ul>
        <ul class="flex flex-col gap-10 items-center md:flex-row md:gap-3">
          <button class="btn">Ic</button>
          <button class="btn">Kirish</button>
          <button class="btn">Ro'yxatdan o'tish</button>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    let toggle = ref(true);
    return {
      toggle,
    };
  },
};
</script>
