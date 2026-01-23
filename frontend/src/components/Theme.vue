<script setup lang="ts">
import type { AppThemes } from '../types/themes';

    const props = withDefaults(
        defineProps<{
            theme?: AppThemes
            text?: string;
        }>(),
        {
            theme: 'light',
            text: "Light",
        }
    );
</script>

<template>
    <div
        class="flex items-center h-16 w-40 gap-1 p-2 m-2 rounded-xl border-2 bg-primary border-secondary text-secondary"
        :class="`theme-${theme}`"
    >
        <span class="flex-1">{{text}}</span>
        <div class="bg-primary h-full w-4 rounded"></div>
        <div class="bg-secondary h-full w-4 rounded"></div>
    </div>
</template>