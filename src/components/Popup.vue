<template>
    <div >
        <v-dialog max-width="500" align-end >
            <v-btn slot="activator">Add New Project</v-btn>

            <v-card >
                <v-card-title>Fill Registration Form</v-card-title>
                <v-card-text>
                    <v-form >

                        <v-text-field prepend-icon="folder" label="Title" v-model="title"> </v-text-field>
                        {{title}}
                        <v-textarea prepend-icon="settings" label="Information" v-model="information"></v-textarea>

                        <v-btn   class=" success mt-5">Save Info</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "Popup",
        data(){
            return{
                information:'',
                title:'',

            }
        }
    }
</script>

<style scoped>

</style>
