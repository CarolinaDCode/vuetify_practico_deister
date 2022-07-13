<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-btn>Texto</v-btn>
                <v-btn color="primary">Texto</v-btn>
                <v-btn dark color="pink" >Texto</v-btn>

                <v-btn text color="primary">Sin fondo</v-btn><br>
                <v-btn color="warning" large>Largo</v-btn>
                <v-btn color="warning" small>Largo</v-btn>
                <v-btn color="warning" large :disabled="true">Largo</v-btn>

                <v-btn color="primary" block>Largo</v-btn><br>
                <!--depressed: boton sin sombra -->
                <v-btn color="info" depressed>Botón</v-btn><br>
                <v-btn>
                    <v-icon>mdi-ev-plug-chademo</v-icon>
                </v-btn>
                <v-btn color="primary">
                    <v-icon>mdi-content-save-outline</v-icon>
                </v-btn>
                <v-btn color="pink" icon flat>
                    <v-icon>mdi-google-downasaur</v-icon>
                </v-btn>
                <v-btn color="black" fab dark>
                    <v-icon>mdi-panda</v-icon>
                </v-btn>
                <v-btn color="red accent-2" fab dark small>
                    <v-icon>mdi-dog</v-icon>
                </v-btn>
                <v-btn color="deep-purple darken-3" fab dark large>
                    <v-icon>mdi-zodiac-gemini</v-icon>
                </v-btn>
                <v-btn color="teal accent-4" fab dark large>
                    <v-icon>mdi-cards-heart</v-icon>
                </v-btn>
                <v-btn color="pink" dark>
                    Texto
                    <v-icon>mdi-robot</v-icon>
                </v-btn>
                <v-btn color="success">
                    Texto
                    <v-icon class="ml-4">mdi-robot</v-icon>
                </v-btn>
                <v-btn color="amber darken-4" dark>
                    Texto
                    <v-icon right>mdi-rice</v-icon>
                </v-btn>
                <v-btn color="light-green accent-4" dark>
                    <v-icon left>mdi-rice</v-icon>
                    Texto
                </v-btn>
                <v-btn color="success" outlined>
                    Texto
                    <v-icon class="ml-4">mdi-robot</v-icon>
                </v-btn>
                <v-btn color="orange darken-2" outlined block>
                    Texto
                    <v-icon class="ml-4">mdi-robot</v-icon>
                </v-btn>
                <v-btn rounded color="green" dark>
                    Texto
                    <v-icon class="ml-4">mdi-robot</v-icon>
                </v-btn>
                <v-btn
                     x-small
                     color="secondary"
                    dark
                    >
                 Extra small Button
                </v-btn>
                <v-btn
                x-large
                color="amber darken-3"
                dark
                >
                Extra large Button
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
// import { mdiBrightness5 } from '@mdi/js';
export default {
    data(){
        return {
            
        };
    }
};
</script>