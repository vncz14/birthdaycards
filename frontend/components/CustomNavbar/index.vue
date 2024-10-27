<template>
    <Menubar :model="items" 
    :style="{
        borderRadius: 0,
        border: 0,
    }">
        <template #start>
            <CustomNavbarLogo />
        </template>
        <template #end>
            <CustomAvatar />
        </template>
    </Menubar>
</template>

<script setup>
import { PrimeIcons } from '@primevue/core/api';

const items = ref([

]);
</script>

<style scoped>

</style>