import { Component, h, Element } from '@stencil/core';
import Swal from 'sweetalert2';

@Component({
  tag: 'admin-login',
  styleUrl: 'admin-login.css',
  shadow: true,
})
export class AdminLogin {
  @Element() element: HTMLElement;

  async handleSubmit(event: Event) {
    event.preventDefault();

    const userNameInput = this.element.shadowRoot.querySelector<HTMLInputElement>('#userName');
    const passwordInput = this.element.shadowRoot.querySelector<HTMLInputElement>('#password');

    if (!userNameInput || !passwordInput) {
      console.error('Failed to find input elements');
      return;
    }

    const userName = userNameInput.value;
    const password = passwordInput.value;

    try {
      
      if (userName === 'admin' && password === '123') {
        
        Swal.fire({
          icon: 'success',
          title: 'Successful login',
          text: 'Welcome, Admin!',
          timer: 7000,
          showConfirmButton: false
        });
        
        window.location.href = '/admin-dashboard';
      } else {
        console.error('Login failed: Invalid credentials');
        Swal.fire({
          icon: 'error',
          title: 'Invalid username or password',
          text: 'Please try again.',
          timer: 5000
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  render() {
    return (
      <div>
        <header-section></header-section>
        <div class="admin-login">
          <div class="login-box">
            <h2>Admin Login</h2>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div class="form-group">
                <label htmlFor="userName">Username</label>
                <input type="text" id="userName" required />
              </div>
              <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
              <div class="button-container"> 
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
        <subscription-section></subscription-section>
        <footer-section></footer-section>
      </div>
    );
  }
}
