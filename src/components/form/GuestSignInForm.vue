<template>
    <form class="form" @submit.prevent @submit="sendSignIn($event)">
        <!-- name -->
        <form-input v-model="guestFormData"
                    type="text"
                    name="name"
                    label="お名前"
                    placeholder="お名前を入力してください" />
        <!-- character -->
        <form-character v-model="guestFormData"
                        :characters="characters" />
        <!-- other error -->
        <div v-if="errors && errors.length>0" class="row errors">
            <span v-for="(error, idx) in errors" :key="idx" class="">{{error}}</span>
        </div>
        <!-- button-submit -->
        <div class="row button-container">
            <button type='submit' class="button-submit">ログインする</button>
        </div>
    </form>
</template>

<script setup lang="ts">
    import formInput from '@/components/form/Input.vue'
    import formCharacter from '@/components/form/Character.vue'
    import { ref, reactive } from 'vue'
    import RequestService from '@/services/RequestService';
    import {FormData} from '@/types/Form'

    const characters = [ "soldier", "robot", "chara01", "chara02", "chara03", "chara04", "chara05", "chara06", "chara07", "chara08" ]

    /*
    *to display error
    */ 
    const errors = ref<[string, string[]][]>();
    const guestFormData = reactive<FormData>({
        name: {
            required:true,
            error: null,
            value: ""
        },
        character: {
            required: true,
            error: null,
            value: "soldier",
        }
    })

    /*
    *to request to api
    */ 
    const service = new RequestService();
    const sendSignIn = (event:any) => {
        errors.value = []
        guestFormData.name.error = null
        guestFormData.character.error = null
        const data = {name: guestFormData.name.value, character:guestFormData.character.value}
        sessionStorage.setItem('nazarev1', JSON.stringify(data))
        service.signIn(data)
        .then((response: any) => {
            console.log(response.data)
            if (response.data.hasOwnProperty("key")){
                // router.push("Stage")
            }
        },
        (error) => {
            // console.log(error.response.data)
             Object.keys(error.response.data).forEach(errorKey => {
                 let flag = false
                 Object.keys(guestFormData).forEach(formKey => {
                     if(errorKey === formKey) {
                         flag = true
                         guestFormData[formKey].error = error.response.data[errorKey]
                     }
                 })
                 //other error
                 if(!flag) {
                     flag = true
                     errors.value?.push(error.response.data[errorKey])
                 }
             })
            //  console.log(guestFormData)
        })
    }

</script>

<style scoped>
.form {
    width: 100%;
    max-width: 450px;
}
.form .errors {
    color: red;
    font-size: 0.7rem;
}
.form .button-submit {
    color: #fff;
    width: 100%;
    padding: 15px 0;
    margin-top: 20px;
    background-color: #1c32e2;
}
</style>