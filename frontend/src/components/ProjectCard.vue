<script setup lang="ts">
    import AnchorButton from './AnchorButton.vue';
    import type { Project } from '../types/project';
    import { ref } from 'vue';

    const props = defineProps<{
        project: Project;
    }>();

    const expand = ref<boolean>(false);
</script>

<template>
    <article class="group relative overflow-hidden rounded-3xl border border-border/80 bg-ghost/30 p-5 shadow-lg shadow-primaryHigh/10 backdrop-blur">
        <div class="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/25 blur-2xl"></div>

        <h3 class="mb-3 text-xl font-bold text-textHigh">{{ project.title }}</h3>

        <div class="mb-5 grid gap-4 text-sm md:grid-cols-2">
            <div>
                <p class="mb-2 text-xs uppercase tracking-[0.2em]">Frontend</p>
                <div class="flex flex-wrap gap-2">
                    <span
                        v-for="tech in props.project.frontend"
                        :key="`${project.title}-${tech}-fe`"
                        class="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-textHigh"
                    >
                        {{ tech }}
                    </span>
                </div>
            </div>

            <div>
                <p class="mb-2 text-xs uppercase tracking-[0.2em]">Backend / Infra</p>
                <div class="flex flex-wrap gap-2">
                    <span
                        v-for="tech in props.project.backend"
                        :key="`${project.title}-${tech}-be`"
                        class="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs text-textHigh"
                    >
                        {{ tech }}
                    </span>
                </div>
            </div>
        </div>

        <div class="mb-5">
            <p class="mb-2 text-xs uppercase tracking-[0.2em]">Highlights</p>
            <div class="flex flex-wrap gap-2">
                <span
                    v-for="feature in props.project.features"
                    :key="`${project.title}-${feature}`"
                    class="rounded-full border border-primary/45 bg-primary/15 px-2.5 py-1 text-xs text-textHigh"
                >
                    {{ feature }}
                </span>
            </div>
        </div>

        <div class="flex flex-wrap items-center gap-3">
            <AnchorButton v-if="props.project.linkDemo" variant="primary" target="_blank" :href="project.linkDemo">Live Demo</AnchorButton>
            <AnchorButton variant="ghostHigh" target="_blank" :href="project.linkSource">Source</AnchorButton>
            <span class="flex-1"></span>
            <button @click="expand = !expand" class="rounded-full border border-border px-3 py-1 text-xs hover:bg-background/70">
                {{ expand ? "Read Less" : "Read More" }}
            </button>
        </div>

        <div v-if="expand" class="mt-5 border-t border-border/80 pt-4">
            <div class="space-y-3">
                <p v-for="paragraph in project.info" :key="paragraph" class="text-sm leading-relaxed">{{ paragraph }}</p>
            </div>
        </div>
    </article>
</template>
