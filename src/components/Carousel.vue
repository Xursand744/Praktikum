<template>
  <div class="mt-12">
    <div class="container mx-auto bg-[#1F222E] rounded-3xl">
      <h2 class="text-center text-white py-10 text-[23px] md:text-[30px] lg:text-[40px]">
        Yuqori maoshli <br />IT-kasblar
      </h2>
      <div class="h-[250px] md:h-[300px]">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            '1023': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '1400': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }"
          :modules="modules"
          class="mySwiper h-80"
        >
          <swiper-slide v-for="Slides in Slide" :key="Slides.id" class="px-5">
            <div
              :class="Slides.bg"
              class="max-w-[425px] h-[190px] w-full rounded-2xl p-5 flex flex-col justify-between"
            >
              <div class="flex justify-between text center text-black">
                <div>
                  <p class="text-xs">{{ Slides.it }}</p>
                  <h3 class="my-3 text-lg md:text-xl">{{ Slides.name }}</h3>
                </div>
                <div class="w-[100px] h-[100px]">
                  <img class="rounded-md w-full h-full object-cover" :src="Slides.img" />
                </div>
              </div>
              <p class="text-xs">{{ Slides.month }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
      Slide: [
        {
          id: 1,
          it: "IT kasb",
          name: "Grafik dizayner",
          img: new URL("../img/swiper(1).png", import.meta.url),
          month: "10 oy",
          bg: "bg-[#D0FA9B]",
        },
        {
          id: 2,
          it: "IT kasb",
          name: "3D-dizayner",
          img:  new URL("../img/swiper(1).png", import.meta.url),
          month: "13 oy",
          bg: "bg-[#FFE6CF]",
        },
        {
          id: 3,
          it: "IT kasb",
          name: "1С-dasturchi",
          img:  new URL("../img/swiper(1).png", import.meta.url),
          month: "6 oy",
          bg: "bg-[#F9D782]",
        },
        {
          id: 4,
          it: "IT kasb",
          name: "Python dasturchi",
          img:  new URL("../img/swiper(1).png", import.meta.url),
          month: "10 oy",
          bg: "bg-[#D0FA9B]",
        },
        {
          id: 5,
          it: "IT kasb",
          name: "Python dasturchi",
          img:  new URL("../img/swiper(1).png", import.meta.url),
          month: "10 oy",
          bg: "bg-[#D0FA9B]",
        },
        {
          id: 6,
          it: "IT kasb",
          name: "Python dasturchi",
          img:  new URL("../img/swiper(1).png", import.meta.url),
          month: "10 oy",
          bg: "bg-[#D0FA9B]",
        },
      ],
    };
  },
};
</script>
