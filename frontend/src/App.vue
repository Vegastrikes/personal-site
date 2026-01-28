<script setup lang="ts">
  import { ref } from 'vue';
  import { usePreferences } from './stores/preferences';
  const preferences = usePreferences();
  preferences.setTheme(preferences.theme);

  import Navbar from './components/Navbar.vue';
  import Dropdown from './components/Dropdown.vue';
  import Theme from './components/Theme.vue';

  import AnchorButton from './components/AnchorButton.vue';
  import ProjectCard from './components/ProjectCard.vue';
  import Icon from './components/Icon.vue';

  import { projects } from './data/projects';

  const themesDropdownOn = ref(false);
</script>

<template>
  <div>
    <Navbar class="bg-primaryDim gap-4 px-6 py-3">
      <span class="flex-1"></span>
      <button @click="themesDropdownOn = true" class="text-lg text-textHigh" aria-haspopup="menu">Themes</button>
    </Navbar>
    <Dropdown v-if="themesDropdownOn" @close="themesDropdownOn = false" class="right-0 space-y-2 bg-background">
      <Theme theme="light" text="Light" @click="preferences.setTheme('light')"></Theme>
      <Theme theme="dark" text="Dark" @click="preferences.setTheme('dark')"></Theme>
      <Theme theme="lightBlue" text="Light Blue" @click="preferences.setTheme('lightBlue')"></Theme>
      <Theme theme="darkBlue" text="Dark Blue" @click="preferences.setTheme('darkBlue')"></Theme>
      <Theme theme="lightRed" text="Light Red" @click="preferences.setTheme('lightRed')"></Theme>
      <Theme theme="darkRed" text="Dark Red" @click="preferences.setTheme('darkRed')"></Theme>
    </Dropdown>

    <div class="px-16">
      <section id="hero" class="mx-auto max-w-5xl p-14">
        <div class="grid grid-cols-12 items-center">
          <div class="col-span-8">
            <h1 class="text-5xl mb-2 font-semibold tracking-tight text-textHigh">
              Frontend / Full-Stack<br>Developer
            </h1>
  
            <p class="mb-4">
              I build scalable web applications with clean, maintainable UI<br> and strong engineering fundamentals.
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
  
      <section id="about-me" class="mx-auto max-w-5xl mb-16">
        <div class="mb-4">
          <h2 class="text-2xl pl-2 text-textHigh">About Me</h2>
          <div class="bg-primaryDim h-1"></div>
        </div>
        <div class="grid grid-cols-2 gap-8 mb-8">
          <div class="rounded-2xl border border-border bg-ghost p-6 shadow-sm">
            <div class="space-y-4 text-sm leading-relaxed">
              <p>
                Several years of experience building web applications, with a strong focus on frontend development and modern UI architecture.
              </p>
              <p>
                I have shipped features end-to-end, from UI architecture to backend integration and deployment. I focus on building maintainable, scalable systems and clean developer-friendly codebases.
              </p>
              <p>
                While my strongest area is frontend, I also enjoy working across the stack when needed and collaborating closely with backend or product teams.
              </p>
            </div>
          </div>
  
  
          <div class="rounded-2xl border border-border bg-ghost p-6 shadow-sm">
            <ul class="space-y-4 text-sm">
              <li class="flex gap-2 items-center">
                <span class="size-2 flex-none rounded-full bg-primary"></span>
                <span>Turning requirements into shipped, tested features</span>
              </li>
              <li class="flex gap-2 items-center">
                <span class="size-2 flex-none rounded-full bg-primary"></span>
                <span>Writing code that others can easily read and extend</span>
              </li>
              <li class="flex gap-2 items-center">
                <span class="size-2 flex-none rounded-full bg-primary"></span>
                <span>Building clean, maintainable UI</span>
              </li>
              <li class="flex gap-2 items-center">
                <span class="size-2 flex-none rounded-full bg-primary"></span>
                <span>Structuring frontend state and API interactions</span>
              </li>
            </ul>
          </div>
        </div>
  
        <div class="flex gap-2">
          <Icon years="2014-2018" info="Industrial Engineer">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"></path>
          </Icon>
          <span class="flex-1 h-1 mx-2 mt-16 bg-ghost"></span>
          <Icon years="2019-2020" info="ERP Application Developer">
            <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path>
          </Icon>
          <span class="flex-1 h-1 mx-2 mt-16 bg-ghost"></span>
          <Icon years="2020-2021" info="Web Development Bootcamp">
            <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path>
          </Icon>
          <span class="flex-1 h-1 mx-2 mt-16 bg-ghost"></span>
          <Icon years="2021-2024" info="Frontend / Full-Stack Developer">
            <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path>
          </Icon>
          <span class="flex-1 h-1 mx-2 mt-16 bg-ghost"></span>
          <Icon years="2025-Present" info="Engineer (non-software)" viewBox="0 0 32 32">
            <path d="M25.9,22.6C25.7,22.2,25.4,22,25,22h-6c-0.3,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.2,0.7,0,1l2,4c0.2,0.3,0.5,0.6,0.9,0.6h6
              c0.3,0,0.7-0.2,0.9-0.5c0.2-0.3,0.2-0.7,0-1L25.9,22.6z"/>
            <path d="M18,5C11.6,5,6.3,10.1,6,16.5l-3.6,2.7c-0.3,0.3-0.5,0.7-0.3,1.1C2.2,20.7,2.6,21,3,21h26c0.6,0,1-0.4,1-1v-3
              C30,10.4,24.6,5,18,5z M20.4,14.9C20.3,15,20.2,15,20,15c-0.4,0-0.7-0.2-0.9-0.6l-1-2c-0.2-0.5,0-1.1,0.4-1.3c0.5-0.2,1.1,0,1.3,0.4
              l1,2C21.1,14,20.9,14.6,20.4,14.9z M24.4,14.9C24.3,15,24.2,15,24,15c-0.4,0-0.7-0.2-0.9-0.6l-1-2c-0.2-0.5,0-1.1,0.4-1.3
              c0.5-0.2,1.1,0,1.3,0.4l1,2C25.1,14,24.9,14.6,24.4,14.9z"/>
          </Icon>
        </div>
      </section>
  
      <section id="projects" class="mx-auto max-w-5xl mb-16">
        <div class="mb-4">
          <h2 class="text-2xl pl-2 text-textHigh">Projects</h2>
          <div class="bg-primaryDim h-1"></div>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <ProjectCard v-for="project in projects" :key="project.title" :project="project"></ProjectCard>
        </div>
      </section>
    </div>

    <footer id="contact" class="border-t border-border bg-primaryDim">
      <div class="mx-auto max-w-5xl px-6 py-12 text-center">
        <p class="mt-4 text-textHigh">
          If you’d like to get in touch, the fastest way is by email or LinkedIn.
        </p>

        <div class="mt-6 flex justify-center gap-3">
          <AnchorButton variant="primary" href="mailto:ozerkozay@hotmail.com">Email Me</AnchorButton>
          <AnchorButton variant="ghost" href="https://www.linkedin.com/in/ozerkozay/">LinkedIn</AnchorButton>
        </div>

        <p class="mt-10 text-xs text-textHigh">
          © 2026 Ozerk Ozay
        </p>
      </div>
    </footer>

  </div>
</template>