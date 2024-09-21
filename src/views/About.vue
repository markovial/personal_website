<!-- src/views/About.vue -->
<template>
  <div class="about content-container">
    <section class="hero">
      <p class="tagline">Polymath | Researcher | Communicator</p>
    </section>

    <section class="core-values">
      <h2>Core Values</h2>
      <ul>
        <li>
          <strong>Boundless Curiosity:</strong> Embracing an insatiable drive to explore and understand the world around us.
        </li>
        <li>
          <strong>Lifelong Learning:</strong> Committing to continuous growth and knowledge acquisition across diverse fields.
        </li>
        <li>
          <strong>Interdisciplinary Approach:</strong> Bridging knowledge gaps and drawing connections across various disciplines.
        </li>
        <li>
          <strong>Existential Hope:</strong> Nurturing optimism for humanity's future through research and education.
        </li>
        <li>
          <strong>Collective Intelligence:</strong> Fostering collaboration between human insight and AI's analytical capabilities.
        </li>
        <li>
          <strong>Immortality:</strong> Pursuing longevity and the preservation of human knowledge and consciousness.
        </li>
      </ul>
    </section>

    <section class="current-focus">
      <h2>Current Focus</h2>
      <p>
        I'm authoring one of the first comprehensive textbooks on AI Safety, consolidating knowledge from hundreds of research papers. This work aims to clarify technical misunderstandings, foster new researchers, and guide public policy in a meaningful direction.
      </p>
      <p>
        My research interests center on exploring collective intelligence through Decentralized AI Governance and decision-making. I'm investigating ways to incorporate democratic feedback mechanisms and decentralized governance (DAOs) into AI systems.
      </p>
    </section>

    <section class="background">
      <h2>Journey</h2>
      <p>
        My unconventional path blends Mathematics (analytical rigor), Computer Science (practical problem-solving), and Theatre (empathy and human connection). Each professional role has shaped my understanding of technology and society:
      </p>
      <ul>
        <li>Software Developer: Honed practical problem-solving skills</li>
        <li>Cybersecurity Professional: Learned to approach risks from multiple perspectives</li>
        <li>Web 3.0 Developer: Embraced open-source principles and novel governance models</li>
      </ul>
    </section>


  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: var(--font-family-main);
  color: var(--text-color);
}

section {
  margin-bottom: 3rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--highlight-color);
}

.tagline {
  font-size: 1.2rem;
  color: var(--text-color-secondary);
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--highlight-color);
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 1rem;
  line-height: 1.6;
}

strong {
  color: var(--highlight-color);
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.call-to-action {
  background-color: var(--background-color-secondary);
  padding: 2rem;
  border-radius: 8px;
}

.call-to-action h2 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>
