<script setup lang="ts">
type Variant = "primary" | "ghost" | "ghostHigh";

const props = withDefaults(
  defineProps<{
    href?: string,
    target?: string,
    variant?: Variant;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    type: "button",
    disabled: false,
  }
);

const variants: Record<Variant, string> = {
  primary:
    "cursor-pointer border border-border bg-primary text-textPrimary hover:bg-success hover:text-textSuccess",
  ghost:
    "cursor-pointer border border-border bg-ghost hover:bg-success hover:text-textSuccess",
  ghostHigh:
    "cursor-pointer border border-border bg-ghostHigh text-ghost hover:bg-success hover:text-textSuccess",
};
</script>

<template>
  <a
    :href="props.href"
    :type="props.type"
    :disabled="props.disabled"
    class="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition"
    :class="variants[props.variant]"
    :target="props.target"
    rel="noreferrer"
  >
    <slot />
  </a>
</template>
