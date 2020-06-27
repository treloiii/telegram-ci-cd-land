<template>
    <div>
        <v-navigation-drawer v-model="sidebar" app :class="`nav1-${getTheme}`">
            <v-list style="color: white;">
                <v-list-item>
                    <h3 :class="getTheme">Telegram CI/CD bot</h3>
                </v-list-item>
                <v-list-item v-for="item in items" :key="item.title" :to="item.path">
                    <v-list-item-action>
                        <v-icon :class="`ic-${getTheme}`">{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content style="margin-left: 1rem" :class="getTheme">{{item.title}}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon :class="`ic-${getTheme}`" @click="github">fab fa-github</v-icon>
                    </v-list-item-action>
                    <v-list-item-content style="margin-left: 1rem" :class="getTheme" @click="github">Github</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-btn text @click="changeTheme" :class="getTheme">Change theme to {{inverse}}</v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-card
                color="grey lighten-4"
                flat
                tile
        >
            <v-app-bar dense :class="`nav-${getTheme}`">
                <span class="more-than-xs">
                    <v-app-bar-nav-icon @click="sidebar=!sidebar" :class="getTheme"></v-app-bar-nav-icon>
                </span>
                <v-toolbar-title>
                    <router-link to="/" tag="p" class="logo">Telegram CI/CD bot</router-link>
                </v-toolbar-title>

                <v-spacer></v-spacer>
                <div class="xs-only">
                    <v-btn text @click="changeTheme" :class="getTheme">Change theme to {{inverse}}</v-btn>
                    <router-link to="/download" tag="button">
                        <v-btn text :class="getTheme">Download</v-btn>
                    </router-link>
                    <router-link to="/start" tag="button">
                        <v-btn text :class="getTheme">Getting started</v-btn>
                    </router-link>
                    <v-icon :class="`ic-${getTheme}`" @click="github()">fab fa-github</v-icon>
                </div>
            </v-app-bar>
        </v-card>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "Navbar",
        data() {
            return {
                sidebar: false,
                items: [
                    {title: "Download", path: "/download", icon: "fas fa-download"},
                    {title: "Getting started", path: "/start", icon: "fas fa-play"},
                ]
            }
        },
        methods: {
            ...mapMutations(["changeTheme"]),
            github() {
                location.href = "https://github.com/treloiii/TelegramCICD";
            }
        },
        computed: mapGetters(["getTheme","inverse"])
    }
</script>

<style scoped>
    @media screen and (max-device-width: 600px) {
        .xs-only {
            visibility: hidden;
            width: 0;
        }
    }

    @media screen and (min-device-width: 600px) {
        .more-than-xs {
            visibility: hidden;
            width: 0;
        }
    }

    .ic-light {
        color: black !important;
    }

    .ic-dark {
        color: whitesmoke !important;
    }

    .nav-dark {
        background-color: #171717 !important;
        color: white !important;
    }
    .nav1-dark{
        background-color: #1b1f23 !important;
    }

    .dark {
        color: white !important;
        background-color: transparent;
    }

    .light {
        background: transparent !important;
    }

    .logo {
        cursor: pointer;
    }
</style>
