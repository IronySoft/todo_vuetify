<template>
    <div>
        <v-btn large class="ml-5 mt-2">
            <v-icon left>work</v-icon>
            <span>Projects</span>
        </v-btn>

        <v-container>
            <v-expansion-panel>
                <v-expansion-panel-content v-for="info in infos">
                    <div slot="header">{{info.title}}</div>

                    <v-card>
                        <v-card-text>
                            {{info.person}} : {{info.due}}   </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
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
        },
        computed:{
            projects(){
                return this.infos.filter(function (info) {
                    return info.person==='Sarjis Abdullah'
                })
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
