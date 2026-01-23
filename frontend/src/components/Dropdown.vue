<script setup lang="ts">
    import { computed, useAttrs } from 'vue';

    const emit = defineEmits<{
        (e: "close"): void;
    }>();

    const attrs = useAttrs();
    const passedClass = computed(() => attrs.class);
</script>

<template>
    <div
        @click="emit('close')"
        class="fixed inset-0"
    ></div>
    <ul
        class="absolute mt-1 space-y-2 border border-slate-300 rounded-2xl max-w-2xs lg:max-w-xl"
        :class="[passedClass]"
    >
        <slot />
    </ul>
</template>
