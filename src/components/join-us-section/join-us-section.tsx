import { Component, h } from '@stencil/core';

@Component({
  tag: 'join-us-section',
  styleUrl: 'join-us-section.css',
  shadow: true,
})
export class JoinUsSection {
  render() {
    return (
      <div>
   
      <section class="join-us">
        <h2>Who Should Join Gym-Freaks?</h2>
        <div class="join-card">
          <h3>Fitness Enthusiasts</h3>
          <p>Passion meets purpose at Gym-Freaks.</p>
        </div>
        <div class="join-card">
          <h3>Beginners</h3>
          <p>Start your fitness journey with us.</p>
        </div>
        <div class="join-card">
          <h3>Health Advocates</h3>
          <p>Invest in your health, join Gym-Freaks.</p>
        </div>
        
      </section>
      </div>
      
    );
  }
}
