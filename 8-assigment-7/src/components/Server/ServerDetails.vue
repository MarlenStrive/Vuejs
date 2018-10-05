<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ text }}</p>
        <template v-if="this.id >= 0">
            <status-button :id="id" status="Normal"></status-button>
            <status-button :id="id" status="Critical"></status-button>
            <status-button :id="id" status="Unknown"></status-button>
            <status-button :id="id" status="Splendid"></status-button>
        </template>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
    import StatusButton from './StatusButton.vue';

    export default {
        data: function() {
            return {
                id: -1,
                status: 'Unknown'
            };
        },
        components: {
            'status-button': StatusButton
        },
        computed: {
            text: function() {
                if (this.id >= 0) {
                    return 'Server #' + this.id + ' status is ' + this.status;
                }
                return 'Server Details are currently not updated';
            }
        },
        created: function() {
            eventBus.$on('loadServerDetails', (data) => {
                this.id = data.id;
                this.status = data.status;
            });
            eventBus.$on('updateServerStatus', (data) => {
                this.status = data.status;
            });
        }
    }
</script>

<style>

</style>
