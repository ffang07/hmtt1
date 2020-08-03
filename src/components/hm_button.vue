<template>
  <div class='btn' @click='zcf1' >{{text}}

  </div>
</template>

<script>
export default {
    props:['text'],
    methods:{
        zcf1(e){
            this.$emit('click',e);
        }
    }

}
</script>

<style lang='less'>
.btn{
    color:white;
    background-color: red;
    width: 315/360*100vw;
    text-align: center;
    height: 48/360*100vw;
    line-height: 48/360*100vw;
    border-radius: 24/360*100vw;
    font-size: 18px;
}


</style>