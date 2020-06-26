<template>
    <v-card
    color="grey lighten-4"
    flat
    tile
    >
    <v-toolbar dense>
        <v-toolbar-title><router-link to="/" tag="p" class="logo">Telegram CI/CD bot</router-link></v-toolbar-title>

        <v-spacer></v-spacer>
        <router-link to="/download" tag="button"><v-btn text>Download</v-btn></router-link>
        <router-link to="/start" tag="button"><v-btn text>Getting started</v-btn></router-link>
        <v-btn text>Github</v-btn>
    </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .logo{
        cursor: pointer;
    }
</style>
