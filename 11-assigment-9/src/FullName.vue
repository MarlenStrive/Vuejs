<template>
    <div class="row">
        <div class="form-group">
            <label>First Name</label>
            <input v-model.lazy="firstName" type="text" class="form-control" placeholder="First Name">
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input v-model.lazy="lastName" type="text" class="form-control" placeholder="Last Name">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data: function() {
            return {
                firstName: '',
                lastName: ''
            };
        },
        created() {
            this.splitNames();
        },
        watch: {
            firstName: function() {
                this.concutNames();
            },
            lastName: function() {
                this.concutNames();
            }
        },
        methods: {
            splitNames() {
                var stringArray = this.value.split(" ");
                this.firstName = stringArray[0];
                this.lastName = stringArray[1];
            },
            concutNames() {
                var fullName = this.firstName + ' ' + this.lastName;
                this.$emit('input', fullName);
            }
        }
    }
</script>

<style>
</style>
