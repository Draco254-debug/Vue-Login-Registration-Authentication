<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="card-title text-center mb-4">Welcome {{ firstName }}</h3>
            <form>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Please Enter email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Please Enter password">
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </div>
            </form>
            <div class="text-center mt-3">
              <router-link to="/ForgotPassword">Forgot Password?</router-link>
            </div>
            <div class="text-center mt-3">
              <router-link to="/Registration">Don't have an account? Register</router-link>
            </div>
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
import { mapState } from 'vuex';
export default {
  name: 'LoginForm',
  computed: {
    ...mapState('auth', {
      firstName: state => state.name,
    }),
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
