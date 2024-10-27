<template>
    <div>
        <Avatar v-if="loggedIn" label="T" shape="circle" @click="toggleMenu" :style="{cursor: 'pointer'}"/>
        <NuxtLink v-else to="/api/login">
            <Button label="Login with Google" icon="pi pi-user" />
        </NuxtLink>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession();

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