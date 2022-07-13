<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md6>
        <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
          <v-card-text>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon left>mdi-tag-faces</v-icon>{{ item.titulo }}
            </v-chip>
            <p>{{ item.descripcion }}</p>
            <v-btn color="warning" class="ml-0" @click="editar(index)">Editar</v-btn>
            <v-btn color="error" class="ml-4" @click="eliminarTarea(item.id)"
              >Eliminar</v-btn
            >
          </v-card-text>
        </v-card>

        <!-- 
        <v-card class="mb-3">
          <v-card-text>
            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon left>mdi-tag-faces</v-icon>Tags Título de tarea #1
            </v-chip>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              doloremque nobis adipisci facere veritatis ad iusto fuga
              repudiandae placeat. Necessitatibus voluptates magnam explicabo.
              Nostrum molestias quod nihil, ipsa pariatur asperiores. Possimus
              ut vel veritatis ipsa voluptatibus, ab dolorem, quod voluptatem
              labore amet nisi dolores ad ipsum neque praesentium molestiae non
              perspiciatis! Velit consectetur modi dolore impedit ullam
              inventore reprehenderit voluptatum? Officiis, quia? A voluptatum,
              voluptatem ducimus architecto consectetur sequi. Fugit a suscipit
              impedit dolores, deleniti voluptatem adipisci ex, quaerat tempora,
              accusamus quis ratione placeat temporibus similique eum
              praesentium quo eveniet!
            </p>
            <v-btn color="warning" class="ml-0">Editar</v-btn>
            <v-btn color="error" class="ml-4">Eliminar</v-btn>
          </v-card-text>
        </v-card>
        -->
      </v-flex>
      <!-- FORMULARIO -->
      <v-flex md6 v-if="formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field
              label="Titulo de la tarea"
              v-model="titulo"
            ></v-text-field>
            <v-textarea
              label="Descripción de tarea"
              v-model="descripcion"
            ></v-textarea>
            <v-btn block color="success" type="submit">Agregar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

    <!-- FORMULARIO DE EDITAR -->
    <!-- !formAgregar: cuando este en false, se visualizara el formulario de aqui -->
      <v-flex md6 v-if="!formAgregar">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editarTarea">
            <v-text-field
              label="Titulo de la tarea"
              v-model="titulo"
            ></v-text-field>
            <v-textarea
              label="Descripción de tarea"
              v-model="descripcion"
            ></v-textarea>
            <v-btn block color="warning" type="submit">Editar Tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- ALERT -->
    <v-snackbar v-model="snackbar">
      {{ mensaje }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      listaTareas: [
        {
          id: 1,
          titulo: "Titulo Tarea #1",
          descripcion:
            "doloremque nobis adipisci \
                        facere veritatis ad iusto fuga repudiandae placeat.\
                        Necessitatibus voluptates magnam explicabo. Nostrum \
                        molestias quod nihil, ipsa pariatur asperiores. Possimus \
                        ut vel veritatis ipsa voluptatibus, ab dolorem, quod voluptatem \
                        labore amet nisi dolores ad ipsum neque praesentium molestiae non perspiciatis",
        },
      ],
      titulo: "",
      descripcion: "",
      snackbar: false,
      mensaje: "dasdasdadsa",
      formAgregar: true,
      indexTarea: ''
    };
  },
  methods: {
    agregarTarea() {
      //console.log(this.titulo, this.descripcion);
      if (this.titulo === "" || this.descripcion === "") {
        this.snackbar = true;
        this.mensaje = "Debe llenar todos los campos!";
      } else {
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion,
        });
        this.titulo = "";
        this.descripcion = "";
        this.snackbar = true;
        this.mensaje = "Tarea Agregada!";
      }
    },
    eliminarTarea(id) {
      this.listaTareas = this.listaTareas.filter((e) => e.id != id);
    },
    editar(index){
        this.formAgregar = false
        this.titulo = this.listaTareas[index].titulo
        this.descripcion = this.listaTareas[index].descripcion
        //guardar el index en indexTarea, para reeemplazar el contenido de cada prppiedad
        this.indexTarea = index

    },
    editarTarea(){
        //para guardar en la misma posicion
        this.listaTareas[this.indexTarea].titulo = this.titulo
        this.listaTareas[this.indexTarea].descripcion = this.descripcion
        //para que vuelva a agregar con los cambios
        this.formAgregar = true
        this.titulo = ''
        this.descripcion = ''
        this.snackbar = true
        this.mensaje = 'Tarea Editada'
    }
  },
};
</script>