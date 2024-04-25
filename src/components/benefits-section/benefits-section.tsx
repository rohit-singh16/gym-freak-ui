import { Component, h } from '@stencil/core';

@Component({
  tag: 'benefits-section',
  styleUrl: 'benefits-section.css',
  shadow: true,
})
export class BenefitsSection {
  render() {
    return (
      <div>
        <header-section></header-section>
        <section class="benefits">
          <h2>Benefits of Joining Gym-Freaks</h2>
          <p class="fade in">Joining a gym offers a plethora of physical and mental health benefits. Regular exercise at the gym can lead to improved cardiovascular health, increased muscle strength, and enhanced flexibility. Engaging in a variety of workouts, from cardio exercises to strength training, helps in achieving overall fitness goals and weight management. The gym environment provides access to a range of equipment and expert guidance from fitness professionals, ensuring a structured and effective workout routine. Beyond the physical advantages, regular gym sessions can also contribute to mental well-being by reducing stress, anxiety, and depression. Additionally, the social aspect of a gym fosters a sense of community, offering opportunities to connect with like-minded individuals, share fitness goals, and receive support. Overall, joining a gym is a holistic approach to enhancing both physical and mental health.</p>
          <div class="benefit-card">
            <img src="/assets/benefits7.jpg" alt="Image 1" />
            <div class="card-content">
              <h3>Build Strength</h3>
              <p>Strength doesn't come from the body. It comes from the will.</p>
            </div>
          </div>
          <div class="benefit-card">
            <img src="/assets/benefits8.jpg" alt="Image 2" />
            <div class="card-content">
              <h3>Boost Confidence</h3>
              <p>Confidence is built, not given. Build it at Gym-Freaks.</p>
            </div>
          </div>
          <div class="benefit-card">
            <img src="/assets/benefits3.jpg" alt="Image 3" />
            <div class="card-content">
              <h3>Stay Fit</h3>
              <p>Fitness is not a destination; it's a journey.</p>
            </div>
          </div>
          <div class="benefit-card">
            <img src="/assets/benefits4.jpg" alt="Image 4" />
            <div class="card-content">
              <h3>Embrace Discipline</h3>
              <p>Discipline is the bridge between goals and accomplishment.</p>
            </div>
          </div>
          <div class="benefit-card">
            <img src="/assets/benefits5.jpg" alt="Image 5" />
            <div class="card-content">
              <h3>Focus on Progress</h3>
              <p>Focus on continual progress rather than striving for perfection.</p>
            </div>
          </div>
          <div class="benefit-card">
            <img src="/assets/benefits6.jpg" alt="Image 6" />
            <div class="card-content">
              <h3>Challenge Yourself</h3>
              <p>The only limit is the one you set yourself.</p>
            </div>
          </div>
        </section><subscription-section></subscription-section>
        <footer-section></footer-section>
      </div>
    );
  }
}
