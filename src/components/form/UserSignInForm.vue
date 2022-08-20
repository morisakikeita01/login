<template>
    <form class="form" @submit.prevent @submit="sendSignIn($event)">
        <!-- email -->
        <form-input v-model="userFormData"
                    type="text"
                    name="email"
                    label="メールアドレス"
                    placeholder="メールアドレスを入力してください" />
        <!-- password -->
        <form-input v-model="userFormData"
                    :type="dynamicInputType"
                    name="password"
                    label="パスワード"
                    placeholder="パスワードを入力してください"
                    :iconClass="dynamicIconClass"
                    @showPassword="showPassword" />
        <!-- charactor -->
        <form-charactor v-model="userFormData"
                        :charactors="charactors" />
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
    import formCharactor from '@/components/form/Charactor.vue'
    import { ref, reactive } from 'vue'
    import RequestService from '@/services/RequestService';
    import {FormData} from '@/types/Form'

    const charactors = [ "appstore", "finder", "github", "photos", "safari", "terminal" ]

    /*
    *to display error
    */ 
    const errors = ref<[string, string[]][]>();
    const userFormData = reactive<FormData>({
        email: {
            required:true,
            error: null,
            value: ""
        },
        password: {
            required:true,
            error: null,
            value: "",
        },
        charactor: {
            required: true,
            error: null,
            value: "appstore",
        }
    })

    /*
    *to request to api
    */ 
    const service = new RequestService();
    const sendSignIn = (event:any) => {
        errors.value = []
        userFormData.emil.error = null
        userFormData.password.error = null
        userFormData.charactor.error = null
        service.signIn({email: userFormData.email.value, password:userFormData.password.value, charactor:userFormData.charactor.value})
        .then((response: any) => {
            console.log(response.data)
            if (response.data.hasOwnProperty("key")){
                // router.push("Stage")
            }
        },
        (error) => {
             Object.keys(error.response.data).forEach(errorKey => {
                 let flag = false
                 Object.keys(userFormData).forEach(formKey => {
                     if(errorKey === formKey) {
                         flag = true
                         userFormData[formKey].error = error.response.data[errorKey]
                     }
                 })
                 //other error
                 if(!flag) {
                     flag = true
                     errors.value?.push(error.response.data[errorKey])
                 }
             })
        })
    }

    /*
    *to show password
    */ 
    const dynamicInputType = ref<"text" | "password">("password")
    const dynamicIconClass = ref<string>("fas fa-eye-slash")
    const showPassword = () => {
        if(dynamicInputType.value === "password") {
            dynamicInputType.value = "text"
            dynamicIconClass.value =  "fas fa-eye";
        }else{
            dynamicInputType.value  = "password";
            dynamicIconClass.value = "fas fa-eye-slash";
        }
    }    

</script>

<style scoped>
.form {
    width: 100%;
    max-width: 400px;
}

.form .errors {
    color: red;
    font-size: 0.7rem;
}
.form .button-submit {
    color: #fff;
    width: 100%;
    padding: 15px 0;
    margin-top: 30px;
    background-color: #1c32e2;
}
</style>