<script setup lang="ts">
    import AnchorButton from './AnchorButton.vue';
    import type { Project } from '../types/project';
    import { ref } from 'vue';

    const props = defineProps<{
        project: Project;
    }>();

    let expand = ref<boolean>(false);
</script>

<template>
    <div>
        <div class="rounded-2xl border border-primaryHigh bg-ghost p-5 shadow-sm">
        <h2 class="mb-2 text-sm font-semibold text-textHigh">{{ project.title }}</h2>

        <div class="mb-8">
            <h4 class="text-sm mb-1">Tech Stack</h4>
            <div class="grid grid-cols-2 mb-3">
                <div class="flex flex-wrap gap-x-1 gap-y-1 border-r">
                    <span v-for="tech in props.project.frontend" class="rounded-md bg-ghostHigh/20 px-2 py-1 h-6 text-xs text-textHigh">{{ tech }}</span>
                </div>
                <div class="flex flex-wrap gap-x-1 gap-y-1 justify-end">
                    <span v-for="tech in props.project.backend" class="rounded-md bg-ghostHigh/20 px-2 py-1 h-6 text-xs text-textHigh">{{ tech }}</span>
                </div>
            </div>

            <div class="items-center text-sm">
                <h4 class="mb-1">Features</h4>
                <div class="flex flex-wrap gap-x-2 gap-y-1">
                    <span v-for="feature in props.project.features" class="rounded-md bg-primary/40 px-2 py-1 text-xs text-textHigh">{{ feature }}</span>
                </div>
            </div>
        </div>

        <div class="flex gap-3">
            <AnchorButton v-if="props.project.linkDemo" variant="primary" target="_blank" :href="project.linkDemo">Live Demo</AnchorButton>
            <AnchorButton variant="ghostHigh" target="_blank" :href="project.linkSource">Source</AnchorButton>
            <span class="flex-1"></span>
            <button @click="expand=!expand" class="flex w-20 items-end text-xs">
                {{ expand ? "Read Less" : "Read More..." }}
            </button>
        </div>

        <div v-if="expand">
            <div class="border-t border-border my-4"></div>
            <div class="space-y-2">
                <p v-for="paragraph in project.info" class="text-sm text-justify">{{ paragraph }}</p>
            </div>
        </div>
        </div>
    </div>
</template>