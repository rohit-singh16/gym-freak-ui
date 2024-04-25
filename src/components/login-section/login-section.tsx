import { Component, h, Element } from '@stencil/core';
import Swal from 'sweetalert2';

@Component({
  tag: 'login-section',
  styleUrl: 'login-section.css',
  shadow: true
})
export class LoginPage {
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
        const response = await fetch(`http://localhost:8080/login-page/${userName}?password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        sessionStorage.setItem("user",userName);
        if (response.ok) {
            const currentUser = await response.json();

            if (currentUser) {
                // Display success notification
                Swal.fire({
                  icon: 'success',
                  title: 'Successful login',
                  text: 'Enjoy!',
                  timer: 7000,
                  showConfirmButton: false
                });
                window.location.href = '/home';
            } 
        } else {
            console.error('Login failed: Server error');
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
      <div class="login-page">
        <div class="login-content">
          {/* <div class="image-container">
            <img src="\assets\3094352-removebg-preview.png" alt="Login Image" />
          </div> */}
          <div class="login-box">
            <h2>User Login</h2>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div class="form-group">
                <label htmlFor="userName">Username</label>
                <input type="text" id="userName" required />
              </div>
              <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
              <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/sign-in-section">Sign Up</a></p>
          </div>
        </div>

      </div>
    );
  }
}
