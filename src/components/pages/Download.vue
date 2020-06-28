<template>
    <v-container class="text-center full">
        <h1 class="top">Get started with your CI/CD inside telegram!</h1>
        <v-row class="top">
            <v-col>
                <v-icon :class="`bot-i-${getTheme}`">fab fa-java</v-icon>
                <h3>Download java version (.jar)</h3>
                <br>
                <p @click="download('java','v0.0.1')" class="dp">Version 0.0.1</p>
            </v-col>
            <v-col>
                <v-icon :class="`bot-i-${getTheme}`">fab fa-java</v-icon>
                <h3>Download java version (.war)</h3>
                <br>
                <p>Coming soon...</p>
                <!--                <a href="http://bot-land.trelloiii.site/static/war/v0.0.1/ci-bot.zip">Version 0.0.1</a>-->
            </v-col>
            <v-col>
                <v-icon :class="`bot-i-${getTheme}`">fab fa-docker</v-icon>
                <h3>Download docker version</h3>
                <br>
                <p>Coming soon...</p>
                <!--                <a href="http://bot-land.trelloiii.site/static/docker/v0.0.1/ci-bot.zip">Version 0.0.1</a>-->
            </v-col>
        </v-row>
        <v-row class="top">
            <v-col cols="12">
                <div class="hint-block">
                    <h3>To get package via cli just enter following command in terminal:</h3>
                    <div :class="`code-block-${getTheme}`">
                        <code>$ curl -o /path/to/workdir/ci-bot.zip
                            http://bot-land.trelloiii.site/static/java/v0.0.1/ci-bot.zip</code>
                    </div>
                </div>
                <div class="hint-block">
                    <h3>Or via wget:</h3>
                    <div :class="`code-block-${getTheme}`">
                        <code>$ wget http://bot-land.trelloiii.site/static/java/v0.0.1/ci-bot.zip -P
                            /path/to/workdir/ci-bot.zip</code>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Download",
        methods: {
            download(type, version) {
                window.location.href = `http://bot-land.trelloiii.site/static/${type}/${version}/ci-bot.zip`
            }
        },
        computed: mapGetters(['getTheme'])
    }
</script>

<style scoped>

    .dp {
        cursor: pointer;
    }

    .bot-i-dark {
        margin-bottom: 2rem;
        font-size: 60px;
        color: white;
    }
    .bot-i-light {
        margin-bottom: 2rem;
        font-size: 60px;
        color: black;
    }

    .code-block-light {
        margin-top: 1.5rem;
        padding: .5rem;
        background: #8f93a9;
        border-radius: .5rem;
    }

    .code-block-dark {
        margin-top: 1.5rem;
        padding: .5rem;
        background: #0f1221;
        border-radius: .5rem;
    }

    .hint-block {
        margin-bottom: 3rem;
    }
</style>
