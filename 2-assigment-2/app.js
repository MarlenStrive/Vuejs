new Vue({
    el: '#exercise',
    data: {
        value: '',
    },
    methods: {
        alertMe: function() {
            alert('Button is clicked');
        },
        keyIsDown: function(event) {
            this.value = event.target.value;
        }
    }
});