<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          <v-container>
              <v-layout>
                  <v-flex>
                      <span class="headline white--text">lorem ipsum ok ok</span>
                  </v-flex>
              </v-layout>
          </v-container>
          </v-img>
          <v-card-title>
            <h2>Pastelería Fina</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="info"> Acción </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>
            <h2>Pastelería Fina</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="info" @click="dialog = true"> Acción </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- Dialog -->
    <v-dialog v-model="dialog" width="500" persistent>
        <v-card>
            <v-card-title>Este es el título</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam obcaecati deserunt iusto fugit repellat, maxime vero eum? Mollitia iste, obcaecati neque vero aperiam voluptas, unde tempore earum dignissimos corporis voluptatibus.
            Officia officiis, voluptatibus consequuntur sequi eum praesentium libero nihil, voluptatem sunt, sapiente aliquid similique. Perferendis eveniet fuga consequuntur accusantium debitis nesciunt porro dignissimos quod culpa recusandae, quo temporibus totam sequi?
            Quia asperiores harum quaerat totam minus voluptatibus mollitia delectus deleniti tempora quos neque velit facere laboriosam deserunt voluptate, hic magni odio, id, quam maxime eos obcaecati qui necessitatibus. Mollitia, optio?
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn @click="dialog = false">Cerrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- Fin Dialog -->
  </v-container>
</template>
<script>
export default {
  data() {
    return {
        dialog: false
    };
  },
};
</script>