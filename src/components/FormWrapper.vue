<template>
    <div class="form-container flex-column align-center justify-center overflow-y-hidden">
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
        <div class="flex" >
            <transition name="left">
                <guest-sign-in-form v-if="currentUser==='guest'" />
            </transition>
            <transition name="right">
                <user-sign-in-form v-if="currentUser==='user'" />
            </transition>
        </div>
        
        <!-- sns menu -->
        <div class="sns-container">
            <p class="lead">ー またはSNSアカウントでログイン ー</p>
            <ul class="items flex align-center justify-space-between">
                <li class="item flex align-center justify-center"><img src="/images/sns/google.png"></li>
                <li class="item flex align-center justify-center"><img src="/images/sns/apple.svg"></li>
            </ul>
        </div>
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
.form-container {
    width: 60vw;
    height: 100%;
    /* padding: 1%; */
    overflow-y: auto;
    background: radial-gradient(circle, rgba(255,255,255,0.6489189425770308) 0%, rgba(247,241,227,0.48365283613445376) 83%);
}
.form-container .h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
}

.form-container .lead {
    max-width: 500px;
    color: #808080;
    font-size: 0.9rem;
    margin: 0px 0 30px;
}

.form-container .user-container {
    position: relative;
    width: 100%;
    max-width: 400px;
    padding: 0;
    margin: 0 0 10px;
}
.form-container .user-container .users {
    width: 100%;
    padding: 0;
    margin: 0;
}
.form-container  .user-container .users .user {
    color: #808080;
    font-size: 0.9rem;
    text-align: center;
    width: 100%;
    padding: 5px 0;
    cursor: pointer;
}
.form-container  .user-container .users .user:first-child {
    border-right: 1px solid #cacaca;
}
.form-container  .user-container .users .user.active {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
} 

.form-container .sns-container {
    width: 100%;
    max-width: 400px;
    margin-top: 20px;
}
.form-container .sns-container .lead {
    text-align: center;
    margin: 20px 0 10px;
}
.form-container .sns-container .items {
    width: 100%;
    margin: 0;
    padding: 0;
}
.form-container .sns-container .items .item {
    width: 48%;
    height: 30px;
    border: 1px solid #cacaca;
    cursor: pointer;
}
.form-container .sns-container img{
    width: 100%;
    max-width: 18px;
    height: auto;
}


/* animation */
.left-enter-to {
  transition: all .3s .3s;
  transform: translateX(0px);
  opacity: 1;
}
.left-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}

.left-leave-to {
  transition: all .3s ;
  transform: translateX(-40px);
  opacity: 0;
}
.left-leave-from {
  transform: translateX(0px);
  opacity: 1;
}

.right-enter-to {
  transition: all .3s .3s;
  transform: translateX(0px);
  opacity: 1;
}
.right-enter-from {
  transform: translateX(40px);
  opacity: 0;
}

.right-leave-to {
  transition: all .3s ;
  transform: translateX(40px);
  opacity: 0;
}
.right-leave-from {
  transform: translateX(0px);
  opacity: 1;
}
</style>
