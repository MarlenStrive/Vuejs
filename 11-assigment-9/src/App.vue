<template>
    <div class="container">
        <form v-if="!isFormSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    
                    <form>
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input v-model.lazy="userData.firstName" type="text" class="form-control" id="fullName" placeholder="First Name">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input v-model.lazy="userData.lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
                        </div>
                        
                        <app-full-name v-model='customComponentFullName'></app-full-name>
                        
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input v-model.lazy="userData.email" type="email" class="form-control" id="email" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input v-model.lazy="userData.password" type="password" class="form-control" id="password" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label for="">Store Data?</label>
                            <div class="form-check form-check-inline">
                                <input v-model="storeInDatabase" class="form-check-input" type="radio" id="storeDataYes" value="Yes">
                                <label class="form-check-label" for="storeDataYes">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input v-model="storeInDatabase" class="form-check-input" type="radio" id="storeDataNo" value="No">
                                <label class="form-check-label" for="storeDataNo">No</label>
                            </div>
                        </div>
                        <button @click.prevent="isFormSubmitted = true" type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isFormSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Custom Component Full Name: {{ customComponentFullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storeInDatabase }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data: function() {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                },
                storeInDatabase: 'No',
                isFormSubmitted: false,
                customComponentFullName: 'Bred Somesurname'
            };
        },
        computed: {
            fullName: function() {
                return this.userData.firstName + ' ' + this.userData.lastName;
            }
        },
        components: {
            'app-full-name': FullName
        }
    }
</script>

<style>
</style>
