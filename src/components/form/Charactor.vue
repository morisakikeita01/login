<template>
    <div class="chara-container">
        <!-- label -->
        <p class="label" for="password">キャラクター選択</p>
        <!-- select area -->
        <swiper ref="swiper"
            :slidesPerView="4"
            :spaceBetween="20"
            :grabCursor="true"
            :pagination="{clickable: true,}"
            @slideChange="swiperSlideChange"
            @reachEnd="swiperReachEnd"
            @reachBeginning="swiperReachBeginning"
            :modules="modules"
            class="mySwiper" >
            <swiper-slide v-for="(chara, idx) in props.charactors" :key="idx" >
                <figure class="chara" 
                        :class="{active:props.modelValue['charactor'].value===chara}" 
                        @click="selectChara(chara)">
                    <img :src="'/images/charas/' + chara + '.svg'">
                </figure>
            </swiper-slide>
        </swiper>
    </div>
    <!-- error message -->
    <p v-if="props.modelValue['charactor'].error" class="errors">
        <span v-for="(error, idx) in  props.modelValue['charactor'].error" :key="idx">{{error}}</span>
    </p>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import {FormData} from '@/types/Form'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import { Pagination } from "swiper";
    const modules = [Pagination]

    interface Props {
        modelValue: FormData;
        charactors: string[];
    }

    const props = defineProps<Props>();

    /*
    *to select charactor
    */ 
    const selectChara = (chara:string) => {
        props.modelValue['charactor'].value = chara
    }
        

    /*
    *to set charactor box shadow 
    */ 
    const swiperSlideChange = () => {
        const swiperEl = document.querySelector('.swiper')
        swiperEl?.classList.add('right')
        swiperEl?.classList.add('left')
    }
    const swiperReachBeginning = () => {
        const swiperEl = document.querySelector('.swiper')
        swiperEl?.classList.remove('left')
    };
    const swiperReachEnd = () => {
        const swiperEl = document.querySelector('.swiper')
        swiperEl?.classList.remove('right')
    };

    onMounted(() => {
        setTimeout(() => {
            const swiperEl = document.querySelector('.swiper')
            swiperEl?.classList.add('right')
        }, 450);
    })
</script>


<style>
.swiper-pagination {
    bottom: 0px !important;
}
</style>

<style scoped>
.chara-container{
    position: relative;
    width: 100%;
    margin-top: 20px;
}
.chara-container .label {
    color: #808080;
    font-size: 0.8rem;
    line-height: 1;
    padding: 0px 0 5px 0;
}
.chara-container input.error {
    background-color: rgba(255, 75, 75, 0.1);
}
.chara-container .swiper {
    box-sizing: border-box;
    padding: 10px 10px 20px;
    border: 1px solid #cacaca;
    position: relative;
}
.chara-container .swiper.left::before{
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: 15px 0 20px -20px #000000 inset;
    pointer-events: none;
}
.chara-container .swiper.right::after{
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    box-shadow: -15px 0 20px -20px #000000 inset;
    pointer-events: none;
}
.chara-container .swiper .chara.active {
    border: 5px solid red;
}
</style>