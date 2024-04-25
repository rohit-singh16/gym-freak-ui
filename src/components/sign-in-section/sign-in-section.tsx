import { Component, h, State } from '@stencil/core';
import Swal from 'sweetalert2';

@Component({
  tag: 'sign-in-section',
  styleUrl: 'sign-in-section.css',
  shadow: true
})
export class SignInSection {
  @State() fullName: string = '';
  @State() userName: string = '';
  @State() email: string = '';
  @State() contact: string = '';
  @State() password: string = '';

  async handleSubmit(event: Event) {
    event.preventDefault();

    // Validation
    if (!this.validateFields()) {
      return;
    }

    try {
      // Check if username is already taken
      const isUsernameTaken = await this.checkUsernameAvailability();

      if (isUsernameTaken) {
        Swal.fire({
          icon: 'error',
          title: 'Username Taken',
          text: 'The username you entered is already taken. Please choose a different one.',
          timer: 7000
        });
        return;
      }

      
      const userData = {
        fullName: this.fullName,
        userName: this.userName,
        email: this.email,
        contact: this.contact,
        password: this.password
      };

      // Make a POST request to your backend API to register the user
      const response = await fetch('http://localhost:8080/sign-in-section', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        // User successfully registered
        Swal.fire({
          icon: 'success',
          title: 'Registration Done',
          text: 'Enjoy!',
          timer: 7000,
          showConfirmButton: false
        });
        
        window.location.href = '/login-page'; 
      } else {
        
        console.error('Registration failed: Server error');
        Swal.fire({
          icon: 'error',
          title: 'Failed to Add User',
          text: 'Please try again.',
          timer: 5000
        });
      }
    } catch (error) {
      console.error('Error during Registration:', error);
    }
  }

  async checkUsernameAvailability(): Promise<boolean> {
    try {
      const response = await fetch(`http://localhost:8080/check-username?username=${this.userName}`);
      const data = await response.json();
      return data.available;
    } catch (error) {
      console.error('Error checking username availability:', error);
      return false;
    }
  }

  validateFields(): boolean {
    
    if (!this.fullName || !this.userName || !this.email || !this.contact || !this.password) {
      alert('Please fill in all fields');
      return false;
    }

    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(this.password)) {
      alert('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character');
      return false;
    }

    return true;
  }

  handleChange(event: Event, field: string) {
    const target = event.target as HTMLInputElement;
    this[field] = target.value;
  }

  render() {
    return (
      <div>
        <header-section></header-section>
        <div class="container">
          {/* <div class="image-container">
            <img src="\assets\new sign up.png" alt="Signup Image"  />
          </div> */}
          <div class="form-container">
          <h2>User Sign In</h2>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <input type="text" placeholder="Full Name" value={this.fullName} onInput={(event) => this.handleChange(event, 'fullName')} />
              <input type="text" placeholder="Username" value={this.userName} onInput={(event) => this.handleChange(event, 'userName')} />
              <input type="email" placeholder="Email" value={this.email} onInput={(event) => this.handleChange(event, 'email')} />
              <input type="tel" placeholder="Contact" value={this.contact} onInput={(event) => this.handleChange(event, 'contact')} />
              <input type="password" placeholder="Password" value={this.password} onInput={(event) => this.handleChange(event, 'password')} />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
        <subscription-section></subscription-section>
        <footer-section></footer-section>
      </div>
    );
  }
}
