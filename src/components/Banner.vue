<template>
    <v-card dark
            hidden-sm-and-down
            class="pa-4"
            flat
            height="300px"
            img="/data/banner_image.png"
    >
        <v-card-actions class="mt-5 justify-center">
            <v-flex xs12 sm6 d-flex>
                <v-select
                        :items="items"

                        label="Select your interest/industry"
                ></v-select>
            </v-flex>

            <v-btn left  color="#007799">GET STARTED</v-btn>
        </v-card-actions>

    </v-card>
</template>

<script>
    export default {
        name: "Banner",
        data: () => ({
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            rating: 3,
        }),
    }
</script>

<style scoped>

</style>
