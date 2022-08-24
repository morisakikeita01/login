<template>
  <Transition appear>
    <div id="popup" v-if="showControls" class="flex-column align-center justify-center">
      <div class="flex-column align-center" :class="{loading:showLoading}">

        <!-- 操作コンポーネント -->
        <Controls/>
        <!-- ローディング -->
        <Transition mode="out-in" name="slide-fade">
          <LoadingProgress v-if="showLoading" :percent="percent" :text="loadingText[currentText]" />
          <StartGameButton v-else @click="showControls=false"/>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Controls from "@/components/Controls.vue"
import LoadingProgress from "@/components/Loading/LoadingProgress.vue";
import StartGameButton from "@/components/button/StartGameButton.vue";
import {ref, watch} from "vue"
const showControls = ref<boolean>(true)
const showLoading = ref<boolean>(true)
const percent = ref<number>(0.0);
const currentText = ref<number>(0.0);
const loadingText = [
  'Loading base meshes',
  'Loading textures',
  'Loading character'
]
const updateLoading = () => {
  // ---- Fixed speed ----
  // if(percent.value >= 0 && percent.value <= 30.0){
  //   percent.value += 1.5
  // }else if(percent.value > 30.0 && percent.value <= 70.0){
  //   percent.value += 2.0
  // }else if(percent.value > 70.0 && percent.value <= 100.0){
  //   percent.value += 3
  // }
  // ---- Random speed ----
  if(percent.value >= 0.0 && percent.value <= 100.0){
    percent.value += parseFloat((Math.random()*3.0).toFixed(2))
  }
}

const interv = setInterval(updateLoading, 100)

watch (() => percent.value,() => {
  if(percent.value > 30.0 && percent.value <= 70.0) currentText.value = 1
  if(percent.value > 70.0 && percent.value <= 100.0) currentText.value = 2
  if(percent.value >= 100.0){
    clearInterval(interv)
    setTimeout(()=>{
      showLoading.value = false
    },100)
  }
})

</script>

<style scoped>
#popup {
  position: fixed;
  z-index: 10;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: #1c32e2;
  backdrop-filter: blur(3px);
}

#popup > div {
  height: 358px;
  background-color: white;
  /* transition: 0.4s 2.0s; */
}
/* #popup > div.loading {
  height: 400px;
} */

/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-fade-leave-to {
  opacity: 0;
}
</style>