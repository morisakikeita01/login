
<template>
    <div class="sign-in flex">
        <FormWrapper v-if="!isSmartphone()" />
        <HeroImageWrapper />
    </div>
</template>

<script setup lang="ts">
    import useUtils from '@/common/useUtils';
    import FormWrapper from '@/components/FormWrapper.vue';
    import HeroImageWrapper from '@/components/HeroImageWrapper.vue';

    const { isSmartphone } = useUtils()

</script>


<style scoped>
.sign-in {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>
