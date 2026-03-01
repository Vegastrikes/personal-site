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
        class="fixed inset-0 z-30"
    ></div>
    <ul
        class="absolute z-40 rounded-2xl border border-border p-1 shadow-lg shadow-primaryHigh/15"
        :class="[passedClass]"
    >
        <slot />
    </ul>
</template>
