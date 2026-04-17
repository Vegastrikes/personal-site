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

  import { projects } from './data/projects';

  const themesDropdownOn = ref(false);

  const strengths = [
    'Design systems and reusable component architecture',
    'State modeling, API integration, and clean data flow',
    'Performance-aware interfaces with clear UX feedback',
    'Scalable codebases with maintainable conventions',
  ];

  const stack = ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind', 'Node', 'Postgres'];

  const year = new Date().getFullYear();
</script>

<template>
  <div class="relative isolate min-h-screen overflow-x-clip bg-background creative-grid">
    <div class="glow-orb glow-orb-left"></div>
    <div class="glow-orb glow-orb-right"></div>

    <Navbar class="top-0 z-30 mx-auto mt-4 flex w-[min(94%,76rem)] flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 px-3 py-3 sm:mt-4 sm:px-4">
      <div class="grid grid-cols-2 sm:grid-cols-3 w-full items-center gap-3 px-2">
        <a href="#hero" class="text-xs font-semibold tracking-[0.22em] text-textHigh uppercase sm:text-sm">ozerk ozay</a>
        <div class="mx-auto hidden items-center gap-6 text-sm sm:flex">
          <a href="#about-me" class="hover:text-textHigh">About</a>
          <a href="#projects" class="hover:text-textHigh">Projects</a>
          <a href="#contact" class="hover:text-textHigh">Contact</a>
        </div>
        <div class="relative ml-auto">
          <button @click="themesDropdownOn = true" class="rounded-xl border border-border px-3 py-2 text-sm text-textHigh hover:bg-ghost" aria-haspopup="menu">
            Themes
          </button>

          <Dropdown v-if="themesDropdownOn" @close="themesDropdownOn = false" class="right-0 top-full mt-2 z-40 space-y-2 bg-background">
            <Theme theme="light" text="Light" @click="preferences.setTheme('light'); themesDropdownOn = false"></Theme>
            <Theme theme="dark" text="Dark" @click="preferences.setTheme('dark'); themesDropdownOn = false"></Theme>
            <Theme theme="lightBlue" text="Light Blue" @click="preferences.setTheme('lightBlue'); themesDropdownOn = false"></Theme>
            <Theme theme="darkBlue" text="Dark Blue" @click="preferences.setTheme('darkBlue'); themesDropdownOn = false"></Theme>
            <Theme theme="lightRed" text="Light Red" @click="preferences.setTheme('lightRed'); themesDropdownOn = false"></Theme>
            <Theme theme="darkRed" text="Dark Red" @click="preferences.setTheme('darkRed'); themesDropdownOn = false"></Theme>
          </Dropdown>
        </div>
      </div>

      <div class="flex w-full flex-wrap gap-2 sm:hidden">
        <a href="#about-me" class="rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-xs text-textHigh">About</a>
        <a href="#projects" class="rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-xs text-textHigh">Projects</a>
        <a href="#contact" class="rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-xs text-textHigh">Contact</a>
      </div>
    </Navbar>

    <main class="px-4 pb-16">
      <section id="hero" class="mx-auto grid w-full max-w-6xl gap-10 py-10 lg:grid-cols-12 lg:py-20">
        <div class="lg:col-span-7 reveal-up">
          <p class="badge-chip mb-4 w-fit">Frontend / Full-Stack Developer</p>
          <h1 class="creative-title mb-5 text-4xl leading-tight font-black md:text-6xl">
            Building interfaces
            <span class="block text-textHigh">with strong engineering under the hood.</span>
          </h1>

          <p class="max-w-2xl text-base leading-relaxed md:text-lg">
            I ship production-ready web apps with scalable frontend architecture, clean UI systems, and practical full-stack decisions.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <AnchorButton variant="primary" href="Ozerk_Ozay_CV.pdf" download="">Download CV</AnchorButton>
            <AnchorButton variant="ghost" href="#projects">Selected Projects</AnchorButton>
            <AnchorButton variant="ghost" href="#contact">Contact</AnchorButton>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <div class="section-panel p-4">
              <p class="text-xs uppercase tracking-[0.2em]">Experience</p>
              <p class="mt-1 text-2xl font-bold text-textHigh">4+ years</p>
            </div>
            <div class="section-panel p-4">
              <p class="text-xs uppercase tracking-[0.2em]">Core Focus</p>
              <p class="mt-1 text-2xl font-bold text-textHigh">Frontend development</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 reveal-up reveal-delay">
          <div class="section-panel p-5">
            <div class="mb-4 flex items-center justify-between">
              <p class="text-sm font-semibold text-textHigh">Current Stack</p>
              <span class="rounded-full border border-border px-2 py-1 text-xs">Open to remote and contract</span>
            </div>

            <div class="mb-5 flex flex-wrap gap-2">
              <span v-for="item in stack" :key="item" class="badge-chip">{{ item }}</span>
            </div>

            <div class="rounded-2xl border border-border bg-background/70 p-4">
              <p class="mb-3 text-xs uppercase tracking-[0.2em] text-textHigh">How I work</p>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  <span>Component-first development with reusable UI primitives</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  <span>Clear state boundaries and explicit data contracts</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  <span>Performance and accessibility baked into delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about-me" class="mx-auto mb-10 w-full max-w-6xl scroll-mt-28 reveal-up">
        <div class="mb-6 flex items-end justify-between gap-4">
          <h2 class="section-heading">About Me</h2>
        </div>

        <div class="grid gap-6 lg:grid-cols-12">
          <div class="section-panel lg:col-span-7 p-6">
            <p class="mb-4 text-sm leading-relaxed md:text-base">
              I focus on frontend work that looks polished, scales cleanly, and stays easy to maintain as the product grows. I care about the handoff between design and engineering as much as I care about runtime behavior.
            </p>
            <p class="text-sm leading-relaxed md:text-base">
              My strongest area is modern frontend architecture, but I am comfortable moving across the stack when decisions need to connect UI, backend, and deployment.
            </p>
          </div>

          <div class="section-panel lg:col-span-5 p-6">
            <p class="mb-4 text-xs uppercase tracking-[0.2em]">Strengths</p>
            <ul class="space-y-3 text-sm">
              <li v-for="strength in strengths" :key="strength" class="flex items-start gap-2">
                <span class="mt-1.5 h-2 w-2 rounded-full bg-primary"></span>
                <span>{{ strength }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" class="mx-auto mb-10 w-full max-w-6xl scroll-mt-28 reveal-up">
        <div class="mb-6 flex items-end justify-between gap-4">
          <h2 class="section-heading">Selected Projects</h2>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ProjectCard v-for="project in projects" :key="project.title" :project="project"></ProjectCard>
        </div>
      </section>
    </main>

    <footer id="contact" class="mx-auto mb-6 w-[min(94%,76rem)] scroll-mt-28">
      <div class="section-panel relative overflow-hidden bg-gradient-to-br from-primary/15 via-background/85 to-success/15 p-6 md:p-8">
        <div class="pointer-events-none absolute -left-10 top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl"></div>
        <div class="pointer-events-none absolute -bottom-10 right-6 h-28 w-28 rounded-full bg-success/20 blur-2xl"></div>

        <div class="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div class="min-w-0 lg:col-span-7">
            <p class="badge-chip mb-4 w-fit">Contact</p>
            <h3 class="text-2xl leading-tight font-black text-textHigh md:text-5xl">Let's build something together.</h3>
            <p class="mt-4 max-w-2xl text-sm leading-relaxed md:text-base">
              Looking for someone who can take ownership of UI quality and deliver maintainable frontend architecture? I am open to remote roles and contract collaborations.
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span class="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs">Frontend Engineering</span>
              <span class="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs">Full-Stack Support</span>
              <span class="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs">Available for interviews</span>
            </div>
          </div>

          <div class="min-w-0 lg:col-span-5">
            <div class="rounded-2xl border border-border/80 bg-background/80 p-5 shadow-lg shadow-primaryHigh/15">
              <p class="text-xs uppercase tracking-[0.2em]">Direct Reach</p>
              <a href="mailto:ozerkozay@hotmail.com" class="mt-2 block break-all text-base font-bold text-textHigh hover:text-primary sm:text-lg">
                ozerkozay@hotmail.com
              </a>
              <p class="mt-1 text-xs">Fastest response channel for opportunities.</p>

              <div class="mt-5 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
                <AnchorButton class="w-full sm:w-auto" variant="primary" href="mailto:ozerkozay@hotmail.com">Send Email</AnchorButton>
                <AnchorButton class="w-full sm:w-auto" variant="ghost" href="https://www.linkedin.com/in/ozerkozay/" target="_blank">LinkedIn</AnchorButton>
              </div>
            </div>
          </div>
        </div>

        <p class="relative mt-8 border-t border-border/70 pt-4 text-center text-xs">© {{ year }} Ozerk Ozay</p>
      </div>
    </footer>
  </div>
</template>
