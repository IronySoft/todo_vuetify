<template>
    <div>
        <v-card
                class="pa-4"
                flat
                height="300px"
                img="/data/banner_image.png"
        >
            <v-layout align-center justify-center fill-height row>
                <v-flex md6>
                    <v-toolbar

                    >
                        <v-select label="hello">

                        </v-select>

                        <v-btn depressed class="white--text" color="#007799">
                            GET STARTED
                        </v-btn>
                    </v-toolbar>
                </v-flex>
            </v-layout>


        </v-card>


        <v-layout row>
            <v-flex md4>
                <v-card
                        class="mx-auto my-5"
                        max-width="400"

                >
                    <v-layout  align-center justify-center fill-height row>
                        <v-flex color="#007799" md6>
                           <v-card-title >Lorem ipsum dolor sit amet, </v-card-title>
                        </v-flex>
                    </v-layout>


                </v-card>
            </v-flex>
            <v-flex md8>
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
            </v-flex>
            <v-card
                    max-width="500"
                    class="mx-auto"
            >
                <v-toolbar
                        color="indigo"
                        dark
                >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Inbox</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-list>
                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            @click=""
                    >
                        <v-list-item-icon>
                            <v-icon v-if="item.icon" color="pink">star</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-avatar>
                            <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-list>
            </v-card>

        </v-layout>
    </div>

</template>

<script>
    export default {
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
    }
</script>
