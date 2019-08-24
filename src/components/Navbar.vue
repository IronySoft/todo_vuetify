<template>
    <nav>
        <v-toolbar app class="text-uppercase">
            <v-toolbar-side-icon @click="come=!come"></v-toolbar-side-icon>
            <v-toolbar-title>
                <span class="font-weight-light">Irony</span>
                <span>Soft</span>
            </v-toolbar-title>


            <v-spacer></v-spacer>

            <v-btn flat>
                change
            </v-btn>
            <v-menu offset-y >
                    <v-btn flat slot="activator">
                        Dropdown
                    </v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>Hello</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-action>

                            <v-switch @click="sendDark"  primary label="Dark"></v-switch>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn depressed>
                <span>Sign up</span>
                <v-icon right="">exit_to_app</v-icon>
            </v-btn>

        </v-toolbar>

        <v-navigation-drawer app v-model="come">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <v-img src="/avatar1.jpg"></v-img>
                    </v-avatar>
                    <p class="grey--text">Sarjis Abdullah</p>
                </v-flex>

                <v-flex class="my-3">
                    <Popup></Popup>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{link.text}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import Popup from './Popup'
    export default {
        name: "Navbar",
        data() {
            return {
                come: false,
                dark: false,
                links: [
                    {icon: 'home', text: 'Home', route: '/'},
                    {icon: 'dashboard', text: 'Dashboard', route: '/dashboard'},
                    {icon: 'supervisor_account', text: 'Team', route: '/team'},
                    {icon: 'work', text: 'Projects', route: '/projects'},
                ],
            }
        },
        methods:{
            sendDark(){
                //alert('Hi')
               this.$emit('sendDark',this.dark=!this.dark)
            }
        },
        components:{
            Popup
        }
    }
</script>

<style scoped>

</style>
