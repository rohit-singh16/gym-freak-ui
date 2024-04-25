import { Component, h } from '@stencil/core';
import Swal from 'sweetalert2';

@Component({
  tag: 'contact-section',
  styleUrl: 'contact-section.css',
  shadow: true
})
export class ContactSection {

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to submit form');
        }
      })
      .then(data => {
        console.log('Form submission successful:', data);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: 'Your message has been sent successfully!',
          timer: 8000 
        });
      })
      .catch(error => {
        console.error('Form submission error:', error);
        
      });
  }

  render() {
    return (
      <div class="contact-container">
        <div>
          <header-section></header-section>
          <h2>Contact Us</h2>
          <form action="https://api.web3forms.com/submit" method="POST" onSubmit={(event) => this.handleSubmit(event)}>
            <input type="hidden" name="access_key" value="bb9a0f59-fef0-4d3d-9223-0f4ca561ac4f" />
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit Form</button>
          </form><subscription-section></subscription-section>
          <footer-section></footer-section>
        </div>
      </div>
    );
  }
}
