<script setup lang="ts">
type Variant = "primary" | "ghost" | "ghostHigh";

const props = withDefaults(
  defineProps<{
    href?: string,
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
    "cursor-pointer border border-border bg-primary text-textPrimary hover:bg-blue-500 hover:border-slate-800",
  ghost:
    "cursor-pointer border border-border bg-ghost hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed",
  ghostHigh:
    "cursor-pointer border border-border bg-ghostHigh text-ghost hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed",
};
</script>

<template>
  <a
    :href="props.href"
    :type="props.type"
    :disabled="props.disabled"
    class="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition"
    :class="variants[props.variant]"
  >
    <slot />
  </a>
</template>
