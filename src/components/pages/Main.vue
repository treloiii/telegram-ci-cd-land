<template>
    <v-container style="text-align: center">
        <v-row>
            <v-col></v-col>
            <v-col cols="10">
                <h1>Your CI/CD server inside Telegram!</h1>
                <br>
                <p>This is a simple amateur CI/CD server for working with simple projects that do not require
                    professional build systems</p>
                <div class="content-block">
                    <h2>What are the advantages?</h2>
                    <br>
                    <ul class="t-center">
                        <li>simple</li>
                        <li>in your phone</li>
                        <li>private access</li>
                        <li>full logging</li>
                        <li>parallel builds</li>
                        <li>builds history</li>
                        <li>webhooks</li>
                        <li>schedules</li>
                    </ul>
                </div>
                <div class="content-block">
                    <h2>Simple interface</h2>
                    <br>
                    <v-img src="@/assets/bot-screen.jpg" class="main-img"></v-img>
                    <br>
                    <ol class="t-center">
                        <li>Full info of pipeline</li>
                        <li>History reference</li>
                        <li>Privacy of token for non-owners</li>
                        <li>Full control of pipeline</li>
                    </ol>
                </div>
                <div class="content-block">
                    <h2>Private access</h2>
                    <br>
                    <p>Only persons with access to the server can use bot</p>
                    <br>
                    <p>All data links on your telegram account!</p>
                    <br>
                    <v-img src="@/assets/bot-screen2.jpg" class="main-img"></v-img>
                </div>
                <div class="content-block">
                    <h2>Logging directly to chat!</h2>
                    <br>
                    <p>While build is working, logs will be coming directly to your chat</p>
                    <br>
                    <p>In the end of the build, bot send you log file</p>
                    <br>
                    <v-img src="@/assets/bot-screen3.png" class="main-img"></v-img>
                </div>
                <div class="content-block">
                    <h2>Webhook support</h2>
                    <br>
                    <p>You can bind any actions you want on webhooks!</p>
                </div>
                <div class="content-block">
                    <h2>Watch repository on schedule</h2>
                    <br>
                    <p>Just create schedule to watch repository changes!</p>
                </div>
                <div class="content-block">
                    <h2>...and many others!</h2>
                </div>
            </v-col>
            <v-col></v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
            <v-col cols="11" style="margin-top: 3rem">
                <span>Check our github! </span><v-icon class="ic" @click="github()">fab fa-github</v-icon>
            </v-col>
            <v-col></v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Main",
        methods: {
            github(){
                location.href="https://github.com/treloiii/TelegramCICD"
            }
        }
    }
</script>

<style scoped>
    .v-image{
        border-radius: 1rem;
    }
    .ic{
        font-size: 60px!important;
        color: black;
    }
    .t-center {
        width: 50%;
        margin-left: 25%;
    }
    .content-block{
        margin-top: 3rem;
    }

    li {
        margin-top: 1rem;
    }

    @media screen and (min-device-width: 600px ) {
        .main-img {
            width: 50%;
            height: 50%;
            margin-left: 25%;
        }
    }
</style>
