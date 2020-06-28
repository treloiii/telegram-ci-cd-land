<template>
    <v-container class="top text-center full">
        <v-row>
            <v-col>
                <h1>Easy way to start with your own CI/CD bot!</h1>
                <div class="top">
                    <h2><v-icon :class="`icon-i-${getTheme}`">fab fa-java</v-icon> Java way (.jar)</h2>
                    <ol class="t-center top">
                        <li class="list"><router-link to="/download" :class="`a-${getTheme}`">Download archive</router-link></li>
                        <li class="list">Unzip archive, there will be 2 files in directory <code>./prod/java</code> : <code>sbot.sh</code> and <code>ci-bot.jar</code> <b>*</b></li>
                        <li class="list">Use sbot.sh to run jar. <b>**</b><br>
                            Provide all data what need in script. <br>
                            It will create <code>bot.sh</code> file for stop and run bot with preferences that you provide at installation part</li>
                    </ol>
                    <div class="top">
                        <h3>Its done!</h3>
                        <p><b>*</b>dont forget to get +x permissions fot all .sh files</p>
                        <p><b>**</b>dont forget that it requires installed java on your server or pc</p>
                    </div>
                </div>
                <div class="top">
                    <h2><v-icon :class="`icon-i-${getTheme}`">fab fa-java</v-icon> Java way (.war)</h2>
                    <p class="list">Coming soon...</p>
                </div>
                <div class="top">
                    <h2><v-icon :class="`icon-i-${getTheme}`">fab fa-docker</v-icon> Docker way</h2>
                    <p class="list">Coming soon...</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "GettingStarted",
        computed:mapGetters(["getTheme"])
    }
</script>

<style scoped>
    .list{
        margin-top: 1.5rem;
    }
    .icon-i-dark{
        font-size: 50px;
        color: white;
    }
    .icon-i-light{
        font-size: 50px;
        color: black;
    }
    .a-dark{
        color: white;
        text-decoration: none;
    }
    .a-light{
        color: black;
        text-decoration: none;
    }
</style>
