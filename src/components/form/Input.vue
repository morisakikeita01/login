<template>
    <div class="formInput e-mail-container">
        <!-- label -->
        <p class="label" :for="props.type">{{props.label}}</p>
        <!-- input -->
        <input v-model="props.modelValue[props.name].value"
                :type="props.type" 
                :name="props.name" 
                :placeholder="props.placeholder?props.placeholder:''"
                :class="[props.name,
                        {required:props.modelValue[props.name].required, 
                        error:props.modelValue[props.name].error}]" />
        <!-- icon -->
        <i v-if="props.iconClass" 
            :class="props.iconClass" 
            @click="emit('showPassword', props.type)"></i>
    </div>
    <!-- error message -->
    <p v-if="props.modelValue[props.name].error" class="errors">
        <span v-for="(error, idx) in  props.modelValue[props.name].error" :key="idx">{{error}}</span>
    </p>
</template>

<script setup lang="ts">
import {FormData} from '@/types/Form'

interface Props {
  modelValue: FormData;
  label: string;
  type: "text" | "password" | "email";
  name: string;
  placeholder?: string;
  iconClass?: string;
}

interface Emits {
  (e: "showPassword", value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();


</script>

<style scoped>
.formInput {
    position: relative;
    width: 100%;
    margin-top: 20px;
}
.formInput .label {
    color: #808080;
    font-size: 0.8rem;
    line-height: 1;
    padding: 0px 0 5px 0;
}
.formInput input {
    height: 50px;
    width: 100%;
    border: 1px solid #cacaca;
    /* outline: none; フォーカス時の枠線非表示 */
    background-color: transparent;
    padding: 0 2rem 0 1rem;
}
.formInput input::placeholder {
    color: #cacaca;
}
.formInput input.error {
    background-color: rgba(255, 75, 75, 0.1);
}
.formInput .fas {
    color: rgb(150, 150, 150);
    font-size: 0.9rem;
    height: 0.9rem;
    position: absolute;
    bottom: 25px;
    right: 0.9rem;
    transform: translateY(50%);
    cursor: pointer;
}
</style>