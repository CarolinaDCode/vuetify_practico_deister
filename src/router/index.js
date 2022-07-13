import Vue from 'vue';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css'
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/grid',
        name: 'grid',
        component: () => import('../views/Grid.vue')
    },
    {
        path: '/botones',
        name: 'botones',
        component: () => import('../views/Botones.vue')
    },
    {
        path: '/cards',
        name: 'cards',
        component: () => import('../views/Cards.vue')
    },
    {
        path: '/tareas-crud',
        name: 'tareas-crud',
        component: () => import('../views/Tareas-crud.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    Base: process.env.BASE_URL,
    routes
})
export default router;


/**
{
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
},
*/