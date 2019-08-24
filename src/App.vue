<template>
    <v-app :dark="dark">
        <!--<Navbar @sendDark="sendDark2"></Navbar>-->
        <Nav2></Nav2>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    //  import Navbar from './components/Navbar'
    import Nav2 from './components/Nav2'

    export default {
        name: 'App',
        data() {
            return {
                dark: false
            }
        },
        components: {
            //Navbar
            Nav2
        },
        methods: {
            sendDark2(item) {
                this.dark = item
            }
        }

    }
</script>
