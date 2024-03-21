<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="card-title text-center mb-4">Forgot Password.</h3>
            <form @submit.prevent="sendResetCode">
              <div class="form-group">
                <label for="email">Please Enter your Email to Get A Password Reset Code.</label>
                <input type="email" class="form-control" v-model="email" placeholder="Enter Your email">
              </div>
              <div class="text-center">
                <router-link to="/ResetPassword" class="btn btn-primary btn-block">Get Code</router-link>
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
export default {
  data() {
    return {
      email: '',
      currentYear: new Date().getFullYear() // Initialize currentYear with the current year
    };
  },
  methods: {
    sendResetCode() {
      // Simulate sending reset code to email
      // Replace this with your actual logic to send reset code
      const resetCode = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit code
      console.log('Reset code sent to email:', resetCode);

      // Redirect to ResetPassword page with reset code as query parameter
      this.$router.push({ name: 'ResetPassword', query: { resetCode } });
    },
    updateCurrentYear() {
      this.currentYear = new Date().getFullYear();
    }
  },
  created() {
    // Update currentYear when the component is created
    this.updateCurrentYear();
  },
};
</script>
