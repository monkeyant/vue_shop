import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
// import 'element-ui'
// import lang from 'element-ui/lib/locale/lang/'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale'
// locale.use(lang)

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
