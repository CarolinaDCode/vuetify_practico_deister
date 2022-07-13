<template>
    <v-container >
        <v-layout wrap>
            <v-flex class="primary" xs12>
                <h1>12</h1>
            </v-flex>
            <v-flex class="warning" xs6>
                <h1>6</h1>
            </v-flex>
            <v-flex class="error" xs6>
                <h1>6</h1>
            </v-flex>
        </v-layout>
        <v-layout 
                    class="mt-5 lime accent-4 white--text"
                    justify-center
                    style="height:300px"
                    align-center
                    > <!-- tambien: mt-5-->
            <v-flex class="info" xs3>
                <h1>Centrado</h1>
            </v-flex>
            <v-flex class="success" xs3>
                <h1>Centrado</h1>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <!-- px : paddin  de forma vertical -->
                <!-- px : paddin  de forma horizontal -->
                <h1 class="display-1 text-uppercase">Lorem, ipsum ok</h1>
                <h1 class="display-2 primary pa-5 mt-5">Lorem, ipsum ok</h1>
                <h1 class="display-3 text-center">Lorem, ipsum ok</h1>
                <h1 class="display-4">Lorem, ipsum ok</h1>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {

    }
</script>