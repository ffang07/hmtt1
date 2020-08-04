<template>
  <input class="ipt" :class="{success:status,error:!status}"  @input="zcf1" @blur="zcf2" />
</template>

<script>
// import {Toast} from 'vant';

export default {
  props: ["rules",'err_msg'],
  date() {
    return {
      status: ''
    };
  },
  methods: {
    zcf1(e) {
      const { value } = e.target;
      this.$emit("input", value);
      if (this.rules && !this.rules.test(value)) {
        this.status = false
      } else {
        this.status = true
      }

      console.log(e, value, '条件：',this.rules && !this.rules.test(value),'状态：',this.status,'为什么没变色？');
    },
    zcf2(e) {
        const { value } = e.target;
        console.log(e,value,'条件2:',!this.rules.test(value),'提示语：',this.err_msg);
        if(this.rules && !this.rules.test(value)){
            // console.log('toast提示输入错误err_msg')
            // Toast.fail(this.err_msg || '输入错误')
            this.$toast.fail(this.err_msg || '输入错误')
        }
    },
  },
};
</script>

<style lang='less'>
.ipt {
  height: 38/360 * 100vw;
  width:100%;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  font-size: 18px;
  padding: 10px 0;
  // border-bottom-color: yellow;
}
.success {
  border-bottom-color: green;
}
.error {
  border-bottom-color: red;
}
</style>