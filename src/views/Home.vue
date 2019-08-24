<template>
    <div>
        <v-layout row>
            <v-img src="/avatar1.jpg">

            </v-img>
        </v-layout>
        <p class="red white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, aut corporis
            eius esse est maiores maxime modi neque perspiciatis placeat quae quas quos sed vero? Exercitationem id
            possimus recusandae!</p>

        <h1 class="caption">Hello</h1>
        <v-btn class="green white--text">click me</v-btn>
        <v-btn dark color="green">click me</v-btn>
        <v-btn depressed color="green">click me</v-btn>
        <v-btn flat color="green">click me</v-btn>

        <v-btn small="" class="pink">
            <v-icon small left="">favorite</v-icon>
            <span>Love</span>
        </v-btn>
        <v-btn fab small="" class="pink">
            <v-icon small left="">favorite</v-icon>
            <span>Love</span>
        </v-btn>
        <router-link :to="{path:'/'}">
            <v-btn class="pink hidden-lg-and-up">
                <span>Love</span>
            </v-btn>
        </router-link>


    </div>
</template>

<script>

    export default {
        data() {
            return {}
        }
    }
</script>
