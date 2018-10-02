new Vue({
    el: '#exercise',
    data: {
        name: 'Maria',
        age: 32,
        imageSrc: 'https://androidandme.com/wp-content/uploads/2015/10/android-smile-emoji-630x381.jpg'
    },
    methods: {
        someRandom: function() {
            return Math.random();
        }
    }
})