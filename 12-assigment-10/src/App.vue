<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-my-on:click="myFunc">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'my-on': {
                bind(el, binding, vnode) {
                    /*
                    if (binding.arg == "click") {
                        el.onclick = binding.value;
                    }
                    */
                   el.addEventListener(binding.arg, binding.value);
                }
            }
        },
        methods: {
            myFunc() {
                alert("Hello");
            }
        }
    }
</script>

<style>
</style>
