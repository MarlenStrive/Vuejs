<template>
import ProgressBarVue from './ProgressBar.vue';
    <div class="container">
        
        <h1>Quotes Added</h1>
        
        <app-progress-bar :count="count" :maxCount="maxCount"></app-progress-bar>
        
        <div class="row">
            <div class="col-md-2 col-md-offset-3" style="width: 50%">
                <div class="form-group">
                    <label for="quote">Quote</label>
                    <textarea id="quote" class="form-control" rows="8" v-model="newQuote"></textarea>
                </div>
                <div class="text-center">
                    <button class="btn btn-primary" @click="addQuote">Add Quote</button>
                </div>
            </div>
        </div>
        
        <div class="quotes" style="margin: 20px 0;">
            <app-quote v-for="(quote, index) in quotes"
                :text="quote"
                :index="index"
                :removeQuoteFn="removeQuote"
            ></app-quote>
        </div>
        
        <br clear="both">
        
        <div class="panel panel-info">
            <div class="panel-heading" style="padding: 20px; text-align: center;">
                Info: Click on a Quote to delete it
            </div>
        </div>
    </div>
</template>

<script>
    import ProgressBar from './ProgressBar.vue';
    import Quote from './Quote.vue';
    
    export default {
        data: function() {
            return {
                quotes: ['Just a Quote to start with something!', 'One more'],
                maxCount: 10,
                newQuote: ''
            };
        },
        computed: {
            count: function() {
                return this.quotes.length;
            }
        },
        components: {
            'app-progress-bar': ProgressBar,
            'app-quote': Quote
        },
        methods: {
            addQuote: function() {
                if (this.count == this.maxCount) {
                    alert('No more quotes can be added!');
                    return;
                }
                if (this.newQuote == '') {
                    alert('The Quote could not be empty');
                    return;
                }
                
                this.quotes.push(this.newQuote);
                this.newQuote = "";
            },
            removeQuote: function(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
