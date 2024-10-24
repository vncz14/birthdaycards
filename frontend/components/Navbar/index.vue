<template>
    <Menubar :model="items" 
    :style="{
        borderRadius: 0,
        border: 0,
    }">
        <template #start>
            <NavbarLogo />
        </template>
        <template #end>
            
        </template>
    </Menubar>
</template>

<script setup>
import { PrimeIcons } from '@primevue/core/api';

const items = ref([
    {
        
    },
]);
</script>

<style scoped>

</style>