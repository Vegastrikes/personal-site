<script setup lang="ts">
import type { AppThemes } from '../types/themes';
import { usePreferences } from '../stores/preferences';

const preferences = usePreferences();

    const props = withDefaults(
        defineProps<{
            theme?: AppThemes
            text?: string;
        }>(),
        {
            theme: 'light',
            text: "Undefined",
        }
    );
</script>

<template>
    <div
        class="flex items-center p-2 h-16 gap-1 border-2 rounded-2xl bg-background border-border cursor-pointer"
        :class="`theme-${theme}`"
        @pointerenter="preferences.displayTheme(`${theme}`)"
        @pointerleave="preferences.displayTheme(preferences.$state.theme)"
    >
        <span class="flex-1 pr-2 text-textHigh">{{text}}</span>
        <div class="flex gap-1 h-12">
            <div class="bg-primary border border-border h-full w-4 rounded"></div>
            <div class="bg-ghost border border-border h-full w-4 rounded"></div>
            <div class="bg-ghostHigh border border-border h-full w-4 rounded"></div>
        </div>
    </div>
</template>