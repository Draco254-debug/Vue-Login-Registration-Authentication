<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-body">
              <h3 class="card-title text-center mb-4">Reset Password</h3>
              <form @submit.prevent="resetPassword">
                <div class="form-group">
                  <label for="resetCode">Reset Code</label>
                  <input type="text" class="form-control" v-model="resetCode" placeholder="Enter reset code">
                </div>
                <div class="form-group">
                  <label for="newPassword">New Password</label>
                  <input type="password" class="form-control" v-model="newPassword" placeholder="Enter new password">
                </div>
                <div class="form-group">
                  <label for="confirmPassword">Confirm Password</label>
                  <input type="password" class="form-control" v-model="confirmPassword" placeholder="Confirm new password">
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-block">Reset</button>
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
    name: 'ResetPasswordForm',
    data() {
      return {
        resetCode: '',
        newPassword: '',
        confirmPassword: '',
        currentYear: new Date().getFullYear() // Initialize currentYear with the current year
      };
    },
    methods: {
      resetPassword() {
        // Implement your logic to validate reset code and set new password
        console.log('Reset code:', this.resetCode);
        console.log('New Password:', this.newPassword);
        console.log('Confirm Password:', this.confirmPassword);
        
        // Simulate success message
        alert('Password reset successful. Please login with your new password.');
  
        // Redirect to login page
        window.location.href = '/login';
      },
      updateCurrentYear() {
      this.currentYear = new Date().getFullYear();
    },
    created() {
    // Update currentYear when the component is created
    this.updateCurrentYear();
  }
    }
  };
  </script>
  