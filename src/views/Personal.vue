<template>
  <div class="personal">
      个人中心页
  </div>
</template>

<script>
import {getUserInfo} from '@/apiaxios/users'

export default {
    mounted(){
        console.log('打印路由：',this.$route)
        let id=this.$route.params.id
        getUserInfo(id)
        .then(res=>{console.log('then成功：',res)})
        .catch(err=>{console.log(err)})
    }
}
</script>

<style>

</style>