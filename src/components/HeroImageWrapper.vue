<template>
    <div class="hero-container flex align-center justify-center" :class="{smartphone:isSmartphone()}">
        <div class="main">
            <p v-if="isSmartphone()" class="note">※このサイトはパソコン専用となっております。<br>　パソコンのブラウザでご利用下さい。</p>
            <h2 class="h2">メタサロンを<br>楽しもう！</h2>
            <p class="lead">最新のニュースやイベントなどの様々な情報を得ることができます。ぜひ、このワールドでバーチャルサロンを楽しんでください！</p>
        </div>
        <div class="iframe-container">
            <iframe src='https://my.spline.design/untitled-843a294fb60e162c64e4735ada009907/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script setup lang="ts">
    import useUtils from '@/common/useUtils';

    const { isSmartphone } = useUtils()
</script>

<style scoped>
.hero-container {
    position: relative;
    width: 40vw;
    height: 100%;
    padding: 5%;
    background-color: #1c32e2;
}
.hero-container.smartphone {
    width: 100vw;
}
.hero-container .main {
    position: relative;
    z-index: 1;
    padding-bottom: 300px;
}
.hero-container .h2 {
    color: #fff;
    font-size: 3rem;
}
.hero-container .lead {
    font-size: 0.9rem;
    margin-top: 40px;
    padding-left: 40px;
    color: rgb(220, 220, 220);
}
.hero-container .note {
    font-size: 0.9rem;
    margin: 10px 0 20px;
    color: rgb(220, 220, 220);
}
.hero-container .iframe-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.hero-container .footer {
    position: fixed;
    z-index: 1;
    bottom: 0;
    right: 0;
    width: 40vw;
    height: 50px;
    background-color: #1c32e2;
}
</style>