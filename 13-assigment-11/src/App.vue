<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ text | reverseFilter }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <hr>
                <p>{{ text | length-count }}</p>
                <p>{{ text | reverseFilter | length-count }}</p>
                <p>{{ text | length-count | reverseFilter }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <p>{{ reversedText }}</p>
                <p>{{ countLengthText }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <hr>
                <p>{{ 'Some another text' | lengthCountMixin }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { SomeMixin } from './SomeMixin.js';

    export default {
        mixins: [SomeMixin],
        data: function() {
            return {
                text: 'Some Text To Reverse'
            };
        },
        computed: {
            reversedText: function() {
                return this.text.split("").reverse().join("");
            },
            countLengthText() {
                return this.text + ' (' + this.text.length + ')';
            }
        },
        filters: {
            reverseFilter(value) {
                return value.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
