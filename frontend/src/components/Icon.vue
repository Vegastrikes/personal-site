<script setup lang="ts">

    let svgSize = "6";

    const props = defineProps({
        years: { type: String, required: false},
        info: { type: String, required: false},
        viewBox: { type: String, required: false},
        svgSize: { type: String, required: false},
    })

    svgSize = props.svgSize ? props.svgSize : svgSize;
    const svgSizeClass = `size-${svgSize}`;

</script>

<template>
    <div class="space-y-2">
        <span class="flex items-center justify-center bg-primary size-10 rounded-3xl m-auto">
            <svg :class=svgSizeClass :viewBox=props.viewBox fill="white">
                <slot />
            </svg>
        </span>
        <div v-if="props.years" class="bg-primaryDim px-2 py-1 rounded-xl text-textDark">
            <p class="text-center">{{ props.years }}</p>
        </div>
        <div v-if="props.info" class="h-20 w-28 bg-primaryDim px-0.5 py-1 rounded-xl text-textPrimary">
            <p class="text-center">{{ props.info }}</p>
        </div>
    </div>
</template>