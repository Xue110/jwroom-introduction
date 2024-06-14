import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  //映射关系：path =》 component
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/main',
      component: () => import('@/views/main/Main.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/main/home/Home.vue')
        },
        {
          path: '/introduction',
          component: () => import('@/views/main/introduction/introduction.vue')
        },
        {
          path: '/join',
          component: () => import('@/views/main/join/Join.vue')
        },
        {
          path: '/homework',
          component: () => import('@/views/main/works/HomeWork.vue')
        },
        {
          path: '/environment',
          component: () => import('@/views/main/form/environment/environment.vue')
        },
        {
          path: '/teacher',
          component: () => import('@/views/main/form/teacher/Teacher.vue')
        },
        {
          path: '/teams',
          component: () => import('@/views/main/form/teams/Team.vue')
        }
      ]
    },
    {
      path: '/:patchMatch(.*)',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

export default router
