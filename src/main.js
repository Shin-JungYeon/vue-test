import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import router from './router'

Vue.config.productionTip = false  // Vue 앱이 처음 실행될 때 나오는 경고문(배포에 대한 팁) 출력 여부
Vue.prototype.$axios = axios;

new Vue({
  router,

  // 네 단계에 거쳐서 ES6로 변형된 메소드. render() : createElement() 의 반환값. createElement()란, Virtual DOM을 만드는 메소드.
  render: h => h(App)
}).$mount('#app')   // id가 app인 태그(index.html)에 mount
