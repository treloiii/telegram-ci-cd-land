<template>
    <div>
        <v-navigation-drawer v-model="sidebar" app>
            <v-list>
                <v-list-item>
                    <h3>Telegram CI/CD bot</h3>
                </v-list-item>
                <v-list-item v-for="item in items" :key="item.title" :to="item.path">
                    <v-list-item-action>
                        <v-icon class="ic">{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content style="margin-left: 1rem">{{item.title}}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-card
                color="grey lighten-4"
                flat
                tile
        >
            <v-app-bar dense>
                <span class="more-than-xs">
                    <v-app-bar-nav-icon @click="sidebar=!sidebar"></v-app-bar-nav-icon>
                </span>
                <v-toolbar-title>
                    <router-link to="/" tag="p" class="logo">Telegram CI/CD bot</router-link>
                </v-toolbar-title>

                <v-spacer></v-spacer>
                <div class="xs-only">
                    <router-link to="/download" tag="button">
                        <v-btn text>Download</v-btn>
                    </router-link>
                    <router-link to="/start" tag="button">
                        <v-btn text>Getting started</v-btn>
                    </router-link>
                    <v-icon class="ic" @click="github()">fab fa-github</v-icon>
                </div>
            </v-app-bar>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                sidebar: false,
                items: [
                    {title: "Download", path: "/download", icon: "fas fa-download"},
                    {title: "Getting started", path: "/start", icon: "fas fa-play"},
                    {title: "Github", path: "/github", icon: "fab fa-github"}
                ]
            }
        },
        methods: {
            github() {
                location.href = "https://github.com/treloiii/TelegramCICD";
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-device-width: 600px) {
        .xs-only{
            visibility: hidden;
            width: 0;
        }
    }
    @media screen and (min-device-width: 600px) {
        .more-than-xs{
            visibility: hidden;
            width: 0;
        }
    }
    .ic {
        color: black !important;
    }

    .logo {
        cursor: pointer;
    }
</style>
