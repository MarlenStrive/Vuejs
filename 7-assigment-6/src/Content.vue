<template>
    <div class="row">
        <servers></servers>
        <server-details></server-details>
    </div>
</template>

<script>
    import ServerDetails from './ServerDetails.vue';
    import Servers from './Servers.vue';

    export default {
        data: function() {
            return {
                text: 'All Servers are managed here'
            }
        },
        components: {
            'servers': Servers,
            'server-details': ServerDetails
        }
    }
</script>

<style>
</style>