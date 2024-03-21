<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-body">
              <h3 class="card-title text-center mb-4">Welcome {{ firstName }}</h3>
              <form>
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" class="form-control" id="firstName" placeholder="Please Enter first name">
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" class="form-control" id="lastName" placeholder="Please Enter last name">
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Please Enter email">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Please Enter password">
                </div>
                <div class="form-group">
                  <label for="confirmPassword">Confirm Password</label>
                  <input type="password" class="form-control" id="confirmPassword" placeholder="Please Confirm password">
                </div>
                <div class="text-center">
                  <router-link to="/login">
                    <button type="button" class="btn btn-primary btn-block">Register</button>
                  </router-link>
                </div>
              </form>
            <div class="text-center mt-5">
              <p>&copy; {{ currentYear }} Graham Moguche. All rights reserved.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import {mapState} from 'vuex';
export default {
    name: 'RegistrationForm', 
    computed: {
      ...mapState('auth',{
          firstName: state => state.name2,
      }),
      currentYear() {
        return new Date().getFullYear();
      }
    }
}; 
</script>
