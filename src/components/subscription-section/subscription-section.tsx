import { Component, h } from '@stencil/core';

@Component({
  tag: 'subscription-section',
  styleUrl: 'subscription-section.css',
  shadow: true,
})
export class SubscriptionSection {
  render() {
    return (
      <section class="subscription">
        <h2>Subscribe for Exclusive Benefits</h2>
        <div class="subscription-card">Bronze Plan - Basic features </div>
        <div class="subscription-card">Silver Plan - Additional perks </div>
        <div class="subscription-card">Gold Plan - Premium access </div>
        <button class="sub-button">Subscribe Now</button>
      </section>
    );
  }
}
