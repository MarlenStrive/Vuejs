new Vue({
    el: '#exercise',
    data: {
        classEffect: '',
        timerId: '',
        yellow: 'yellow',
        someClass: 'some-class',
        thirdClass: 'yellow',
        forthClass: 'some-class',
        forthClass2: 'true',
        color: 'blue',
        timerId2: '',
        width: 0
    },
    computed: {
        isYellowClass: function() {
            return this.forthClass2 == 'true';
        }
    },
    methods: {
        startEffect: function() {
            var vm = this;
            vm.timerId = setInterval(function() {
                vm.classEffect = (vm.classEffect == 'shrink') ? 'highlight' : 'shrink';
            }, 1000); // 1 second
        },
        stopEffect: function() {
            clearTimeout(this.timerId);
            this.classEffect = '';
        },
        startProgress: function() {
            var vm = this;
            vm.timerId2 = setInterval(function() {
                vm.width += 10;
            }, 100);
        },
        stopProgress: function() {
            clearTimeout(this.timerId2);
        }
    }
});