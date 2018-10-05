<template>
    <button @click="updateServerStatus">Change status to {{ status }}</button>
</template>

<script>
    import { eventBus } from '../../main.js';
    
    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            status: {
                type: String,
                default: 'Normal'
            }
        },
        methods: {
            updateServerStatus: function() {
                eventBus.updateServerStatus({id: this.id, status: this.status});
            }
        }
    }
</script>

<style>

</style>
