<script setup lang="ts">
  import { ref } from 'vue';
  import { usePreferences } from './stores/preferences';
  const preferences = usePreferences();
  preferences.setTheme(preferences.getTheme);

  import Navbar from './components/Navbar.vue';
  import Dropdown from './components/Dropdown.vue';
  import Theme from './components/Theme.vue';

  import AnchorButton from './components/AnchorButton.vue';
  import ProjectCard from './components/ProjectCard.vue';
  import Icon from './components/Icon.vue';

  const themesDropdownOn = ref(false);
</script>

<template>
  <div>
    <Navbar class="bg-primaryDim gap-4 px-6 py-3">
      <a href="https://github.com/Vegastrikes" target="_blank" class="size-12 rounded-full bg-black">
        <img src="./assets/github.png">
      </a>
      <a href="https://www.linkedin.com/in/ozerkozay/" target="_blank" class="size-12">
        <img src="./assets/linkedin.png">
      </a>
      <span class="flex-1"></span>
      <button @click="themesDropdownOn = true" class="text-lg">Themes</button>
    </Navbar>
    <Dropdown v-if="themesDropdownOn" @close="themesDropdownOn = false" class="right-0 h-80 space-y-4 bg-primary">
      <Theme theme="light" text="Light" @click="preferences.setTheme('light')"></Theme>
      <Theme theme="dark" text="Dark" @click="preferences.setTheme('dark')"></Theme>
      <Theme theme="lightRed" text="Light Red" @click="preferences.setTheme('lightRed')"></Theme>
      <Theme theme="darkRed" text="Dark Red" @click="preferences.setTheme('darkRed')"></Theme>
    </Dropdown>

    <section id="hero" class="mx-auto max-w-5xl p-14">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-8">
          <h1 class="text-5xl mb-2 font-semibold tracking-tight text-textDark">
            Vue.js focused<br/>Frontend Developer
          </h1>

          <p class="mb-4 text-textLight">
            I build scalable web applications with clean, maintainable UI.
          </p>

          <div class="flex flex-wrap gap-3">
            <AnchorButton variant="primary">Download CV</AnchorButton>
            <AnchorButton variant="ghost" href="#projects">View Projects</AnchorButton>
            <AnchorButton variant="ghost" href="#contact">Contact</AnchorButton>
          </div>
        </div>

        <div class="col-span-4">
          <p class="m-4 px-16 rounded-full border border-border bg-primaryHigh py-1 text-sm text-textPrimary">
            Open to remote roles and contracting work
          </p>
        </div>
      </div>
    </section>

    <section id="about-me" class="mx-auto max-w-5xl mb-24">
      <div class="mb-4">
        <h2 class="text-2xl pl-2">About Me</h2>
        <div class="bg-primaryDim h-1"></div>
      </div>
      <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="rounded-2xl border border-border bg-ghost p-6 shadow-sm">
          <div class="space-y-4 text-sm leading-relaxed">
            <p>
              I have several years of experience building web applications, with a strong focus on frontend development and modern UI architecture.
            </p>
            <p>
              I’ve worked on real production systems involving authentication, APIs, and relational databases, and I’m comfortable taking features from idea to deployment.
            </p>
            <p>
              While my strongest area is frontend, I also enjoy working across the stack when needed and collaborating closely with backend or product teams.
            </p>
          </div>
        </div>


        <div class="rounded-2xl border border-border bg-ghost p-6 shadow-sm">
          <ul class="mt-4 space-y-4 text-sm text-slate-600">
            <li class="flex gap-2 items-center">
              <span class="size-2 flex-none rounded-full bg-primaryDim"></span>
              <span>Building clean, maintainable UI for data-driven products</span>
            </li>
            <li class="flex gap-2 items-center">
              <span class="size-2 flex-none rounded-full bg-primaryDim"></span>
              <span>Structuring frontend state and API interactions</span>
            </li>
            <li class="flex gap-2 items-center">
              <span class="size-2 flex-none rounded-full bg-primaryDim"></span>
              <span>Turning requirements into shipped, tested features</span>
            </li>
            <li class="flex gap-2 items-center">
              <span class="size-2 flex-none rounded-full bg-primaryDim"></span>
              <span>Writing code that others can easily read and extend</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex gap-2">
        <Icon years="2014-2018" info="Industrial Engineer">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"></path>
        </Icon>
        <span class="flex-1 h-1 mx-2 mt-12 bg-ghost"></span>
        <Icon years="2019-2020" info="ERP Application Developer">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path>
        </Icon>
        <span class="flex-1 h-1 mx-2 mt-12 bg-ghost"></span>
        <Icon years="2020-2021" info="Web Development Bootcamp">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path>
        </Icon>
        <span class="flex-1 h-1 mx-2 mt-12 bg-ghost"></span>
        <Icon years="2021-2024" info="Frontend / Full-Stack Developer">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path>
        </Icon>
        <span class="flex-1 h-1 mx-2 mt-12 bg-ghost"></span>
        <Icon years="2025-Present" info="Engineer (non-software)" svgSize="7" viewBox="0 0 200 200">
          <path class="cls-1" d="M176,123.16c0,1.66,0,3.3-.17,4.93a73.32,73.32,0,0,1-5.56,23.66H29.73a73.32,73.32,0,0,1-5.56-23.66C24,126.46,24,124.82,24,123.16A74.58,74.58,0,0,1,57.83,60.83,75.77,75.77,0,0,1,83,50.14a74.59,74.59,0,0,1,7.74-1.33,75.94,75.94,0,0,1,9.29-.56c1.51,0,3,0,4.5.14q2.59,0.15,5.13.47a73.92,73.92,0,0,1,7.75,1.36,72.71,72.71,0,0,1,8.79,2.6A75.33,75.33,0,0,1,176,123.16Z"></path><path class="cls-2" d="M176,123.16c0,1.66,0,3.3-.17,4.93a73.32,73.32,0,0,1-5.56,23.66H38.73a73.32,73.32,0,0,1-5.56-23.66C33,126.46,33,124.82,33,123.16c0-39.88,31.62-72.49,71.5-74.78C144.38,50.67,176,83.28,176,123.16Z"></path><path class="cls-3" d="M73.83,52.8V98.85a8,8,0,0,1-16,0v-38A76.18,76.18,0,0,1,73.83,52.8Z"></path><path class="cls-3" d="M142.17,60.84v38a8,8,0,0,1-16,0v-46A75,75,0,0,1,142.17,60.84Z"></path><path class="cls-3" d="M109.63,48.86V100.5a2.48,2.48,0,0,1-2.46,2.42h-14a2.48,2.48,0,0,1-2.46-2.42V48.81A74.59,74.59,0,0,0,83,50.14V100.5a10.14,10.14,0,0,0,10.2,10.05h14a10.15,10.15,0,0,0,10.21-10.05V50.22A73.92,73.92,0,0,0,109.63,48.86Z"></path><path class="cls-4" d="M176,123.17c0,1.66,0,3.3-.17,4.93a73.32,73.32,0,0,1-5.56,23.66H29.73a73.32,73.32,0,0,1-5.56-23.66C24,126.47,24,124.82,24,123.17c0-41.37,34-74.91,76-74.91S176,81.8,176,123.17Z"></path><path class="cls-1" d="M196.67,133v13.8a5,5,0,0,1-5,4.93H8.33a5,5,0,0,1-5-4.93V133a5,5,0,0,1,5-4.93H191.67A5,5,0,0,1,196.67,133Z"></path><path class="cls-2" d="M196.67,133v13.8a5,5,0,0,1-5,4.93H18.83a5,5,0,0,1-5-4.93V133a5,5,0,0,1,5-4.93H191.67A5,5,0,0,1,196.67,133Z"></path><path class="cls-4" d="M196.67,133v13.8a5,5,0,0,1-5,4.93H8.33a5,5,0,0,1-5-4.93V133a5,5,0,0,1,5-4.93H191.67A5,5,0,0,1,196.67,133Z"></path>
        </Icon>
      </div>
    </section>

    <section id="projects" class="mx-auto max-w-5xl mb-16">
      <div class="mb-4">
        <h2 class="text-2xl pl-2">Projects</h2>
        <div class="bg-primaryDim h-1"></div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </section>

    <footer id="contact" class="border-t border-border bg-primaryDim">
      <div class="mx-auto max-w-5xl px-6 py-12 text-center">
        <p class="mt-4 text-textDark">
          If you’d like to get in touch, the fastest way is by email or LinkedIn.
        </p>

        <div class="mt-6 flex justify-center gap-3">
          <AnchorButton variant="primary" href="mailto:ozerkozay@hotmail.com">Email Me</AnchorButton>
          <AnchorButton variant="ghost" href="https://www.linkedin.com/in/ozerkozay/">LinkedIn</AnchorButton>
        </div>

        <p class="mt-10 text-xs text-textDark">
          © 2026 Ozerk Ozay
        </p>
      </div>
    </footer>

  </div>
</template>

<style>.cls-1{fill:#ffffff;}.cls-2{fill:#ffffff;}.cls-3{fill:#2f4360;}.cls-4{fill:none;stroke:#2f4360;stroke-linecap:round;stroke-linejoin:round;stroke-width:5.96px;}</style>