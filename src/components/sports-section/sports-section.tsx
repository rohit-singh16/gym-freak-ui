
import { Component, h } from '@stencil/core';

interface Sports {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  tag: 'sports-section',
  styleUrl: 'sports-section.css',
  shadow: true,
})
export class SportsSection {
  sports: Sports[] = [
    {
      id: 1,
      name: 'PowerLifting',
      description: 'Build strength and endurance with our weightlifting sessions.',
      imageUrl: './assets/power.jpg',
    },
    {
      id: 2,
      name: 'Yoga',
      description: 'Relax your mind and body with our rejuvenating yoga classes.',
      imageUrl: './assets/yoga.jpg',
    },
    {
      id: 3,
      name: 'Cardio Kickboxing',
      description: 'Boost your cardiovascular fitness with high-energy kickboxing workouts.',
      imageUrl: './assets/kick.jpg',
    },
    {
      id: 4,
      name: 'Cycling',
      description: 'Join our cycling classes for a fun and effective way to stay fit.',
      imageUrl: './assets/cycle.jpg',
    },
    {
      id: 5,
      name: 'Zumba',
      description: 'Dance your way to fitness with our lively and energetic Zumba sessions.',
      imageUrl: './assets/zumba.jpg',
    },
    {
      id: 6,
      name: 'Martial Arts',
      description: 'Learn self-defense and discipline through our martial arts programs.',
      imageUrl: './assets/karate.jpg',
    },
  ];

  render() {
    return (
      <div>
        <header-section></header-section>
        <section class="sports">
          <h2>Featured Sports</h2>
          <div class="sport-list">
            {this.sports.map((sport) => (
              <div class="sport-item" key={sport.id}>
                <img src={sport.imageUrl} alt={sport.name} />
                <h3>{sport.name}</h3>
                <p>{sport.description}</p>
              </div>
            ))}
          </div>
        </section>
        <subscription-section></subscription-section>
        <footer-section></footer-section>
      </div>
    );
  }
}
