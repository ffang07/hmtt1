<template>
  <div id="app">
    <div class="container">
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="inputs">
        <!-- <input  placeholder="请输入手机号" class="input" />
        <input  placeholder="密码" class="input" type="password" /> -->
        <hminput v-model='users.username' placeholder='请输入11位手机号' :rules='/^1\d{10}$/' err_msg='必须是11位手机号' @input='fcl2' ></hminput>
        <hminput v-model="users.password" placeholder='请输入密码' type='password'></hminput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class>去注册</a>
      </p>
      <hmbutton text='登陆' @click='login'></hmbutton>
    </div>
  </div>
</template>

<script>
import hmbutton from '@/components/hm_button'
import hminput from '@/components/hm_input'
import {userLogin} from '@/apiaxios/users'

export default {
    components:{
        hmbutton,
        hminput
    },
    data(){
        return{
            users:{
                username:'',
                password:''
            }
            
        }
    },
    methods:{
        login(e){
            userLogin(this.users).then(res=>{
                if(res.data.message==="登录成功"){
                    // console.log('登陆成功，存token，跳到个人中心页')
                    localStorage.setItem('hmtt1_token',res.data.data.token)
                    this.$router.push({path:`/personal/${res.data.data.user.id}`})
                }else{
                    this.$toast.fail('用户名或密码错误')
                }
                console.log(e,this.users,res)
            }).catch(err=>{
                this.$toast.fail('err请稍后再试')
                console.log(err)
            })
        },
        fcl2(v){
            this.user=v;
            console.log(v,this.users)
        }
    }
};
</script>

<style lang='less' scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
