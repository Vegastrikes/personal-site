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
        class="flex h-16 cursor-pointer items-center gap-1 rounded-2xl border-2 border-border bg-background p-2"
        :class="`theme-${theme}`"
        @pointerenter="preferences.displayTheme(`${theme}`)"
        @pointerleave="preferences.displayTheme(preferences.$state.theme)"
    >
        <span class="flex-1 pr-2 text-sm font-semibold text-textHigh">{{text}}</span>
        <div class="flex gap-1 h-12">
            <div class="bg-primary border border-border h-full w-4 rounded"></div>
            <div class="bg-ghost border border-border h-full w-4 rounded"></div>
            <div class="bg-ghostHigh border border-border h-full w-4 rounded"></div>
        </div>
    </div>
</template>
