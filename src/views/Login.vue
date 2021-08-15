<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="~assets/logo.png"
             alt="">
      </div>
      <el-form ref="loginRef"
               :model="form"
               label-width="0px"
               class="login-form"
               :rules="loginRules">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user"
                    v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock"
                    v-model="form.password"
                    type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary"
                     @click="loginClick">登录</el-button>
          <el-button type="info"
                     @click="resetLogin">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from 'network/login'

export default {
  name: 'login',
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLogin () {
      this.$refs.loginRef.resetFields()
    },
    loginClick () {
      this.$refs.loginRef.validate().then(valid => {
        login(this.form.username, this.form.password).then(result => {
          if (result && result.meta.status === 200) {
            window.sessionStorage.setItem('token', result.data.token)
            this.$router.push('/home')
          } else {
            this.$message({
              message: '登录失败',
              type: 'warning'
            })
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #2b4b6b;
  height: 100%;
}

.login-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar-box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

.login-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
