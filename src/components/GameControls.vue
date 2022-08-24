<template>
  <div id="controls-modal" class="flex align-center justify-center">
    <div class="flex-column align-center">
      <button class="close-btn" @click="close()" v-if="showClose">
        <div class="hexagon">
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g data-name="close" class="cross">
              <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
              <path
                d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
            </g>
          </svg>
        </div>
      </button>
      <div class="controls-input flex-column align-center">
        <div class="trapezoid t1"></div>
        <div class="trapezoid t2"></div>
        <div class="trapezoid t3"></div>
        <div class="trapezoid t4"></div>
  
        <div class="controls-columns flex">
          <div class="column-2 flex-column align-center">
            <p class="text">キャラクター移動</p>
            <div class="flex-column">
              <div class="flex">
                <div class="hexagon">W</div>
                <div class="hexagon">A</div>
                <div class="hexagon">S</div>
                <div class="hexagon">D</div>
              </div>
              <div class="flex">
                <div class="hexagon">
                  <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                    <g>
                      <path d="M18,29h-4c-1.1,0-2-0.9-2-2V15H8.4c-0.8,0-1.5-0.5-1.8-1.2S6.4,12.2,7,11.6l8.3-8.3c0.4-0.4,1-0.4,1.4,0l8.3,8.3
                        c0.6,0.6,0.7,1.4,0.4,2.2s-1,1.2-1.8,1.2H20v12C20,28.1,19.1,29,18,29z"/>
                    </g>
                  </svg>
                </div>
                <div class="hexagon">
                  <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                    <g>
                      <path d="M13,25.6c-0.5,0-1-0.2-1.4-0.6l-8.3-8.3c-0.4-0.4-0.4-1,0-1.4L11.6,7c0.6-0.6,1.4-0.7,2.2-0.4c0.8,0.3,1.2,1,1.2,1.8V12h12
                        c1.1,0,2,0.9,2,2v4c0,1.1-0.9,2-2,2H15v3.6c0,0.8-0.5,1.5-1.2,1.8C13.5,25.5,13.3,25.6,13,25.6z"/>
                    </g>
                  </svg>
                </div>
                <div class="hexagon">
                  <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                    <g>
                      <path d="M16,29c-0.3,0-0.5-0.1-0.7-0.3L7,20.4c-0.6-0.6-0.7-1.4-0.4-2.2s1-1.2,1.8-1.2H12V5c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v12
                        h3.6c0.8,0,1.5,0.5,1.8,1.2s0.1,1.6-0.4,2.2l-8.3,8.3C16.5,28.9,16.3,29,16,29z"/>
                    </g>
                  </svg>
                </div>
                <div class="hexagon">
                  <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                    <g>
                      <path d="M19,25.6c-0.3,0-0.5-0.1-0.8-0.2c-0.8-0.3-1.2-1-1.2-1.8V20H5c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h12V8.4
                        c0-0.8,0.5-1.5,1.2-1.8C19,6.3,19.8,6.4,20.4,7l8.3,8.3c0.4,0.4,0.4,1,0,1.4L20.4,25C20,25.4,19.5,25.6,19,25.6z"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
  
          </div>
          <div class="column-2 flex-column align-center">
            <p class="text">カメラを移動する</p>
            <div class="flex align-center mouse-controls">
              <div class="hexagon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 206.667 206.667" xml:space="preserve">
                  <path d="M169.568,94.11v52.143c0,33.312-27.102,60.414-60.414,60.414H97.513c-33.313,0-60.414-27.102-60.414-60.414V94.11H169.568z
                    M85.105,58.375V34.87c0-8.316,5.604-15.334,13.229-17.515V0h-0.82C64.2,0,37.099,27.102,37.099,60.414V84.11h61.234v-8.22
                    C90.708,73.709,85.105,66.691,85.105,58.375z M111.562,58.375V34.87c0-4.538-3.691-8.229-8.229-8.229s-8.229,3.691-8.229,8.229
                    v23.506c0,4.537,3.691,8.229,8.229,8.229S111.562,62.913,111.562,58.375z M109.154,0h-0.82v17.355
                    c7.625,2.181,13.229,9.199,13.229,17.515v23.506c0,8.316-5.604,15.334-13.229,17.514v8.22h61.234V60.414
                    C169.568,27.102,142.466,0,109.154,0z"/>
                    <path class="mouse-icon" d="M85.1,58.4V34.9c0-8.3,5.6-15.3,13.2-17.5V0h-0.8C64.2,0,37.1,27.1,37.1,60.4v23.7h61.2v-8.2
      C90.7,73.7,85.1,66.7,85.1,58.4z"/>
                </svg>
              </div>
              <p class="mouse-text">クリック＆ドロップ</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <button class="start-btn">
        <span class="play-icon"></span>
        ゲームスタート
      </button> -->
    </div>
  </div>
</template>

<script setup lang="ts">

  interface Props {
    showClose?: boolean
    active?: boolean
  }
  interface Emits {
    (e: "updateActive", value: boolean): void;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<Emits>();
  
  const close = () => {
    emit('updateActive',false)
  }
</script>
<style scoped>
/* #controls-modal {
  position: absolute;
  z-index: 10;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: #1c32e2;
  backdrop-filter: blur(3px);
} */

#controls-modal .close-btn {
  align-self: flex-end;
  margin-bottom: 10px;
}

#controls-modal .controls-input {
  position: relative;
  width: 500px;
  background: rgb(30,25,37);
  background: linear-gradient(315deg, rgba(40,35,47,1) 0%, rgba(70,70,90,0.95) 100%);
  border-radius: 0;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
}

#controls-modal .controls-input .text {
  color: #fff;
  margin: 10px 0;
}

#controls-modal .controls-columns {
  width: 100%;
  padding: 30px 0;
  color: rgb(130,120,140);
}

#controls-modal .trapezoid {
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
}

#controls-modal .t1 {
  top: 0;
  left: 50px;
  border-top: 8px solid rgb(90,90,115);
  width: 150px;
}

#controls-modal .t2 {
  bottom: 0;
  right: 50px;
  border-bottom: 8px solid rgb(90,90,115);
  width: 120px;
}

#controls-modal .t3 {
  bottom: 0;
  left: 200px;
  border-bottom: 8px solid rgb(90,90,115);
  width: 60px;
}

#controls-modal .t4 {
  top: 0;
  right: 15px;
  border-top: 8px solid rgb(90,90,115);
  width: 30px;
}

#controls-modal .hexagon {
  --hex: 40px;
  --hexhalf: 20px;
  --hexheight: calc(var(--hex) / 1.732);
  --hexheight2: calc(var(--hex) / 3.464);
  --hexheight2m: calc(var(--hex) / -3.464);
  margin: 16px 4px;
  width: var(--hex);
  /* height: 28.8675px; */
  height: var(--hexheight);
  background-color: rgb(90,90,115);
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

#controls-modal .hexagon::before {
  content: "";
  position: absolute;
  top: var(--hexheight2m);
  left: 0;
  width: 0;
  height: 0;
  border-left: var(--hexhalf) solid transparent;
  border-right: var(--hexhalf) solid transparent;
  border-bottom: var(--hexheight2) solid rgb(90,90,115);
}

#controls-modal .hexagon::after {
  content: "";
  position: absolute;
  bottom: var(--hexheight2m);
  left: 0;
  width: 0;
  height: 0;
  border-left: var(--hexhalf) solid transparent;
  border-right: var(--hexhalf) solid transparent;
  border-top: var(--hexheight2) solid rgb(90,90,115);
}

#controls-modal .hexagon svg {
  width: 23px;
  fill: white;
}

#controls-modal button.start-btn {
  margin-top: 30px;
  background-color: #1C32E2;
  color: white;
  width: 220px;
  height: 60px;
}

#controls-modal button.start-btn span.play-icon {
  display: inline-block;
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: white;
  top: 5px;
  right: 7px;
}

#controls-modal button.start-btn span.play-icon::after {
  content: "";
  position: absolute;
  top: 7px;
  left: 8px;
  border-left: solid 5px #000;
  border-top: solid 3px transparent;
  border-bottom: solid 3px transparent;
}

#controls-modal .mouse-controls {
  height: 100%;
}

#controls-modal .mouse-text {
  margin-left: 10px;
  color: #fff;
}

#controls-modal svg .mouse-icon {
  stroke: #1c32e2;
  fill: #1c32e2;
}

.column-2 {
  width: 50%;
}
</style>