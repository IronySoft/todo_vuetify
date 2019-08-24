<template>
    <div >
        <v-btn large >
            <v-icon left>favorite</v-icon>
            <span>Dashboard</span>
        </v-btn>
        <v-container  align-center justify-center>
            <v-layout row>
                <v-tooltip top>
                    <v-btn depressed flat @click="sortBy('title')" slot="activator">
                        <v-icon>title</v-icon>
                        <span>Sort by Title</span>
                    </v-btn>
                    <span>Info will Sort by Title</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <v-btn flat @click="sortBy('person')"  slot="activator">
                        <v-icon>person</v-icon>
                        <span>Sort by Person</span>
                    </v-btn>
                    <span>Info will Sort by person</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn flat @click="sortBy('due')"  slot="activator">
                        <v-icon>dashboard</v-icon>
                        <span>Sort by Due Date</span>
                    </v-btn>
                    <span>Info will Sort by Date-Due</span>
                </v-tooltip>
                <v-tooltip top>
                    <v-btn flat @click="sortBy('status')"  slot="activator">
                        <v-icon>dashboard</v-icon>
                        <span>Sort by Due Date</span>
                    </v-btn>
                    <span>Info will Sort by status</span>
                </v-tooltip>

            </v-layout>
            <v-card flat v-for="info in infos" :key="info.title">
                <v-layout row wrap :class="`pa-3 project ${info.status} `">
                    <v-flex xs12 sm6 md4>
                        <h1 class="caption grey--text">Project Title</h1>
                        <h1 class="caption">{{info.title}}</h1>
                    </v-flex>
                    <v-flex xs4 sm6 md3>
                        <h1 class="caption grey--text">Person</h1>
                        <h1 class="caption">{{info.person}}</h1>
                    </v-flex>
                    <v-flex xs4 sm6 md3>
                        <h1 class="caption grey--text">Due Date</h1>
                        <h1 class="caption">{{info.due}}</h1>
                    </v-flex>
                    <v-flex xs4 sm6 md2>
                        <div class="right">
                            <v-chip small="" :class="`${info.status} caption white--text` ">
                                {{info.status}}
                            </v-chip>
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                infos: [
                    {
                        title: 'Laravel Framework Specialist',
                        person: 'Didarul Abdullah',
                        due: '10 Jan 2018',
                        status: 'completed'
                    },
                    {title: 'VueJS Framework Specialist', person: 'Meherab ', due: '10 Jan 2019', status: 'failed'},
                    {
                        title: 'Vuetify Framework Specialist',
                        person: 'Nowfel Abdullah',
                        due: '10 Jan 2019',
                        status: 'completed'
                    },
                    {
                        title: 'DotNet Framework Specialist',
                        person: 'Sarjis Abdullah',
                        due: '10 Jan 2017',
                        status: 'failed'
                    },
                    {
                        title: 'Nuxt Framework Specialist',
                        person: 'Ismail Abdullah',
                        due: '10 Jan 2016',
                        status: 'finished'
                    },
                    {
                        title: 'Android Framework Specialist',
                        person: 'Yusuf Abdullah',
                        due: '10 Jan 2015',
                        status: 'ongoing'
                    },
                ]
            }
        },
        methods: {
            sortBy(prop) {
                this.infos.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
            }
        }
    }
</script>

<style scoped>
    .project.completed {
        border-left: green 4px solid;
    }

    .project.failed {
        border-left: crimson 4px solid;
    }

    .project.ongoing {
        border-left: aqua 4px solid;
    }

    .project.finished {
        border-left: blue 4px solid;
    }

    .v-chip.failed {
        background: crimson;
    }

    .v-chip.completed {
        background: green;
    }

    .v-chip.ongoing {
        background: aqua;
    }

    .v-chip.finished {
        background: blue;
    }
</style>
