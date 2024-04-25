import { Component, h } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.css',
  shadow: true,
})
export class HomePage {
  render() {
    return (
      <div class="landing-page">
        
        <header-section></header-section>
        <hero-section></hero-section>
        <about-section></about-section>
        <join-us-section></join-us-section>
        <subscription-section></subscription-section>
        <footer-section></footer-section>
      </div>
    );
  }
}
