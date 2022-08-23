<template>
    <div class="form-wrapper flex-column align-center justify-center overflow-y-hidden">
        <h2 class="h2">メタバースへようこそ</h2>
        <p class="lead">すでにアカウントをお持ちの方はユーザーログインして下さい。<br>
        アカウントを作成せずにゲストとして参加する事もできます。
        </p>
        <!-- select user -->
        <div class="user-container">
            <ul class="users flex justify-center">
                <li id="guest" class="user" :class="{active:currentUser==='guest'}" @click="changeUser('guest')">ゲストとして入場する</li>
                <li id="user" class="user" :class="{active:currentUser==='user'}" @click="changeUser('user')">ユーザーログイン</li>
            </ul>
        </div>

        <!-- form -->
        <div class="form-container flex justify-center" >
            <guest-sign-in-form v-if="currentUser==='guest'" />
            <user-sign-in-form v-else-if="currentUser==='user'" />
        </div>
        
        <!-- sns menu -->
        <!-- <div class="sns-container">
            <p class="lead"> またはSNSアカウントでログイン </p>
            <ul class="items flex align-center justify-space-between">
                <li class="item flex align-center justify-center"><img src="/images/sns/google.png"><span class="text">Googleアカウント</span></li>
                <li class="item flex align-center justify-center"><img src="/images/sns/apple.svg"><span class="text">Appleアカウント</span></li>
            </ul>
        </div> -->
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import GuestSignInForm from '@/components/form/GuestSignInForm.vue';
    import UserSignInForm from '@/components/form/UserSignInForm.vue';
    
    /*
    *to switch between user and guest
    */ 
    const currentUser = ref<string>("guest")
    const changeUser = (user:string) => {
        currentUser.value = user
    }
</script>

<style scoped>
.form-wrapper {
    width: 60vw;
    height: 100%;
    /* padding: 1%; */
    overflow-y: auto;
    background: radial-gradient(circle, rgba(255,255,255,0.6489189425770308) 0%, rgba(247,241,227,0.48365283613445376) 83%);
}
.form-wrapper .h2 {
    width: 450px;
    font-size: 1.8rem;
    margin-bottom: 20px;
}

.form-wrapper .lead {
    width: 450px;
    color: #afafaf;
    font-size: 0.9rem;
    margin: 0px auto 40px;
}

.form-wrapper .user-container {
    position: relative;
    width: 100%;
    max-width: 450px;
    padding: 0;
    margin: 0 0 10px;
}
.form-wrapper .user-container .users {
    width: 100%;
    padding: 0;
    margin: 0;
}
.form-wrapper  .user-container .users .user {
    color: #808080;
    font-size: 0.9rem;
    text-align: center;
    width: 100%;
    padding: 10px 0;
    cursor: pointer;
}
.form-wrapper  .user-container .users .user.active {
    color: #1C32E2;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 10px 10px;
} 

.form-wrapper .form-container {
    position: relative;
    width: 100%;
    max-width: 450px;
}

.form-wrapper .sns-container {
    width: 100%;
    max-width: 450px;
    margin-top: 30px;
}
.form-wrapper .sns-container .lead {
    position: relative;
    text-align: center;
    margin: 20px 0 10px;
}
.form-wrapper .sns-container .lead::after {
    position: absolute;
    content: "";
    top: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #dfe4ea;
}
.form-wrapper .sns-container .items {
    width: 100%;
    margin: 0;
    padding: 0;
}
.form-wrapper .sns-container .items .item {
    width: 48%;
    height: 40px;
    border: 1px solid #cacaca;
    cursor: pointer;
}
.form-wrapper .sns-container .items .item .text {
    font-size: .8rem;
    color: #afafaf;
    padding-left: 1rem;
}
.form-wrapper .sns-container img{
    width: 100%;
    max-width: 16px;
    height: auto;
}


/* animation */
.left-enter-to {
  transition: all .3s .3s;
  /* transform: translateX(0px); */
  opacity: 1;
}
.left-enter-from {
  /* transform: translateX(-40px); */
  opacity: 0;
}

.left-leave-to {
  transition: all .3s ;
  /* transform: translateX(-40px); */
  opacity: 0;
}
.left-leave-from {
  /* transform: translateX(0px); */
  opacity: 1;
}

.right-enter-to {
  transition: all .3s .3s;
  /* transform: translateX(0px); */
  opacity: 1;
}
.right-enter-from {
  /* transform: translateX(40px); */
  opacity: 0;
}

.right-leave-to {
  transition: all .3s ;
  /* transform: translateX(40px); */
  opacity: 0;
}
.right-leave-from {
  transform: translateX(0px);
  opacity: 1;
}


/* fade enter and leave transition*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
