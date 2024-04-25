import { Component, h } from '@stencil/core';

@Component({
  tag: 'hero-section',
  styleUrl: 'hero-section.css',
  shadow: true,
})
export class HeroSection {
  render() {
    return (
      <section class="hero">
        <div class="hero-content">
          <h1 class="glowing-text t1">Transform Your Body, Transform Your Life</h1>
        </div>
        <div class="gym-image"></div>
        <div class="hero-content">
          <button class="cta-button">Get Started</button>
        </div>
      </section>
    );
  }
}
