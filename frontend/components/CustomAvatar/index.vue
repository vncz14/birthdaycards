<template>
    <div>
        <Avatar label="T" shape="circle" @click="toggleMenu" :style="{cursor: 'pointer'}"/>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
</template>

<script setup lang="ts">
const menu = ref();

const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-desktop'
    },
    {
        label: 'New card',
        icon: 'pi pi-plus'
    },
]);

const toggleMenu = (event: Event) => {
    menu.value.toggle(event);
};
</script>