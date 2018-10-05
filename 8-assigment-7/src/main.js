import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
        loadServerDetails: function(server) {
            this.$emit('loadServerDetails', server);
        },
        updateServerStatus(server) {
            this.$emit('updateServerStatus', server);
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})