<template>
    <v-container class="text-center">
        <h1>Get started with your CI/CD inside telegram!</h1>
        <v-row class="top">
            <v-col>
                <h3>Download java version (.jar)</h3>
                <br>
                <p @click="download('java','v0.0.1')" class="dp">Version 0.0.1</p>
            </v-col>
            <v-col>
                <h3>Download java version (.war)</h3>
                <br>
                <p>Coming soon...</p>
                <!--                <a href="http://bot-land.trelloiii.site/static/war/v0.0.1/ci-bot.zip">Version 0.0.1</a>-->
            </v-col>
            <v-col>
                <h3>Download docker version</h3>
                <br>
                <p>Coming soon...</p>
                <!--                <a href="http://bot-land.trelloiii.site/static/docker/v0.0.1/ci-bot.zip">Version 0.0.1</a>-->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Download",
        methods: {
            download(type, version) {
                window.location.href = `http://bot-land.trelloiii.site/static/${type}/${version}/ci-bot.zip`
            }
        }
    }
</script>

<style scoped>
    .top {
        margin-top: 3rem;
    }
    .dp{
        cursor: pointer;
    }
</style>
