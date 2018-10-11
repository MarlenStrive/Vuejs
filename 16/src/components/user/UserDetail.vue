<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded ID: {{ id }}</p>
        <router-link tag="button" class="btn btn-primary" :to="'/user/' + id + '/edit'">Edit User</router-link>
        <router-link tag="button" class="btn btn-primary" 
                :to="{ name: 'userEdit', params: { id: id }, query: { locale: 'en', q: 100 } }"
            >Edit User (using name)</router-link>
    </div>
</template>

<script>
    export default {
        /*data() {
            //console.log(this.$route);
            //console.log(this.$route.params);
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to, from) { // 'from' and 'to' are routes
                this.id = to.params.id;
            }
        },*/
        computed: {  // from vue-router 2.2 version
            id: function() {
                return this.$route.params.id
            }
        }
    }
</script>