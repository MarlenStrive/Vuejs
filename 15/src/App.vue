<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <button @click.prevent="submit" class="btn btn-primary">Send to the server</button>
                <button @click.prevent="getData" class="btn btn-primary">Get data</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                user: {
                    username: 'Maria ' + Math.random(),
                    email: 'some@email.com'
                },
                users: []
            };
        },
        methods: {
            submit() {
                //$http was added by VueResource
                this.$http.post('', this.user)
                     // promises
                    .then(response => {
                        console.log('-- RESPONSE --');
                        console.log(response);
                    }, error => {
                        console.log('-- ERROR --');
                        console.log(error);
                    });
            },
            getData() {
                this.$http.get('')
                     .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log('-- RESPONSE GET --');
                        console.log(data);
                    });
            }
        }
    }
</script>

<style>
</style>
