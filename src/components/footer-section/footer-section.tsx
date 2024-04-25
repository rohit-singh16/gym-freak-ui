import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-section',
  styleUrl: 'footer-section.css',
  shadow: true,
})
export class FooterSection {
  render() {
    return (
      <footer>
        <div class="contact-info">
          <p>Contact us: info@gymfreaks.com | Phone: 123-456-7890</p>
          <p>Visit us at: Gym-Freaks, 123 Fitness Street, Bangalore</p>
        </div>
        <div class="social-links">
          <a href="/contact-container">Contact Us</a>
          <a href="https://www.facebook.com/">Facebook</a>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://www.instagram.com/accounts/login/?hl=en">Instagram</a>
        </div>
        <div class="quick-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        
        <div class="admin-button">
          <a href="/admin-login">Admin Login</a>
        </div>
      </footer>
    );
  }
}
