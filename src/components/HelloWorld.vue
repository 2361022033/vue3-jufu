<template>
  <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
    <a-form-item field="userName" tooltip="用户名或手机号" label="用户名">
      <a-input
        v-model="form.userName"
        placeholder="请输入你的用户名..."
      />
    </a-form-item>
    <a-form-item field="password" label="密码">
      <a-input v-model="form.password" placeholder="请输入你的密码..." />
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
  {{ form }}
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios'

export default {
  data(){
    return {
      isAllShop: [],//定义空数组
    }
  },
  setup() {
    const form = reactive({
      userName: '',
      password: '',
    });
    // const handleSubmit = (data) => {
    //   console.log(data);
    //   axios.post('http://127.0.0.1:8081/user/login',form).then(res=>{
    //     console.log("res==="+res);
    //     alert("code:"+res.code+";message:"+res.message+";retCode:"+res.retCode+";retMsg:"+res.retMsg)
    //   })
    // };

    const handleSubmit = (data) => {
      console.log(data);
      axios.get('http://127.0.0.1:8081/book/page').then(res=>{
        console.log("res==="+res);
        console.log("res.data==="+res.data);
        alert("res:"+res+"code:"+res.code+";message:"+res.message+";retCode:"+res.date+";retMsg:"+res.retMsg)
      })
    };

    return {
      form,
      handleSubmit,
    };
  },
};
</script>
