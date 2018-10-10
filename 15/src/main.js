import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-fc690.firebaseio.com/data.json'; // main url I am going to use
Vue.http.interceptors.push((request, next) => {
    console.log('-- REQUEST --');
    console.log(request);
    if (request.method == 'POST') {
        request.method = 'PUT';
    }
    next(response => {
        // override this method
        response.json = () => { return {messages: response.body} }
    });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
