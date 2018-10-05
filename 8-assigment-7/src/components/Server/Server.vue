<template>
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="loadServerDetails">
        Server #{{ id }}, status {{ status }}
    </li>
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
                required: true
            }
        },
        methods: {
            loadServerDetails: function() {
                eventBus.loadServerDetails({id: this.id, status: this.status});
            }
        },
        created() {
            eventBus.$on('updateServerStatus', (data) => {
                if (this.id == data.id) {
                    this.status = data.status;
                }
            });
        }
    }
</script>

<style>

</style>
