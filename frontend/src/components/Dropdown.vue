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
        class="absolute border border-border rounded-2xl p-1"
        :class="[passedClass]"
    >
        <slot />
    </ul>
</template>
