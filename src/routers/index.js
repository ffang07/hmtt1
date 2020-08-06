import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Personal from '@/views/Personal'

Vue.use(VueRouter)

const router=new VueRouter({
    routes:[
        {
            name:'Login',
            path:'/login',
            component:Login
        },
        {
            name:'Personal',
            path:'/personal/:id',
            component:Personal
        }
    ]
})

router.beforeEach( (to,from,next)=>{
    if(to.path.indexOf('/personal/')===0){
        let token=localStorage.getItem('hmtt1_token')
        console.log('守卫to from next:',to,from,next)
        if(token){
            next()
        }else{
            next({name:'Login'})
        }
    }else{
        next()
    }
} )

export default router