<template>
    <div>
        <h1 class="subheading ma-5">Our Team Member</h1>
        <v-container class="ma-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md3 lg2 v-for="person in team">
                    <v-card class="text-sm-center ma-3">
                        <v-responsive>
                            <v-avatar>
                                <v-img :src="person.img"></v-img>
                            </v-avatar>
                        </v-responsive>
                        <v-card-text class="subheading">{{person.name}}</v-card-text>
                        <v-card-text class="caption">{{person.role}}</v-card-text>

                        <v-card-actions>
                            <v-btn small flat>
                                <v-icon left>message</v-icon>
                                <span class="right">Message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Team",
        data() {
            return {
                team: [
                    {name: 'Sarjis', role: 'Full Stack Developer',img:'/avatar1.jpg'},
                    {name: 'Meherab', role: 'Android Developer',img:'/avatar1.jpg'},
                    {name: 'Jewel', role: 'Graphics Designer',img:'/avatar1.jpg'},
                    {name: 'Nowfel', role: 'Beginner Developer',img:'/avatar1.jpg'},
                    {name: 'Saiful', role: 'Beginner Developer',img:'/avatar1.jpg'},
                    {name: 'Ismail', role: 'Beginner Developer',img:'/avatar1.jpg'},
                    {name: 'Yusuf', role: 'Beginner Developer',img:'/avatar1.jpg'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
