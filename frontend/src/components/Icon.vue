<script setup lang="ts">

    const props = defineProps({
        years: { type: String, required: false},
        info: { type: String, required: false},
        viewBox: { type: String, required: false},
    })

</script>

<template>
    <div class="space-y-2">
        <span class="flex items-center justify-center bg-primary/80 size-10 rounded-3xl m-auto">
            <svg fill="currentColor" class="size-6 text-textPrimary" :viewBox="props.viewBox">
                <slot />
            </svg>
        </span>
        <div v-if="props.years" class="bg-primaryDim/40 px-2 py-1 rounded-xl text-textHigh">
            <p class="text-center">{{ props.years }}</p>
        </div>
        <div v-if="props.info" class="h-20 w-28 bg-primaryDim/40 px-0.5 py-1 rounded-xl text-textHigh">
            <p class="text-center">{{ props.info }}</p>
        </div>
    </div>
</template>