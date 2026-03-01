<script setup lang="ts">
type Variant = "primary" | "ghost" | "ghostHigh";

const props = withDefaults(
  defineProps<{
    href?: string,
    target?: string,
    variant?: Variant;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    download?: string
  }>(),
  {
    variant: "primary",
    type: "button",
    disabled: false,
  }
);

const variants: Record<Variant, string> = {
  primary:
    "cursor-pointer border border-border bg-primary text-textPrimary shadow-sm shadow-primary/30 hover:-translate-y-0.5 hover:bg-success hover:text-textSuccess",
  ghost:
    "cursor-pointer border border-border bg-ghost hover:-translate-y-0.5 hover:bg-success hover:text-textSuccess",
  ghostHigh:
    "cursor-pointer border border-border bg-ghostHigh text-ghost hover:-translate-y-0.5 hover:bg-success hover:text-textSuccess",
};
</script>

<template>
  <a
    :href="props.href"
    :aria-disabled="props.disabled"
    :tabindex="props.disabled ? -1 : 0"
    class="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
    :class="[variants[props.variant], props.disabled ? 'pointer-events-none opacity-50' : '']"
    :target="props.target"
    rel="noreferrer"
    :download="props.download"
  >
    <slot />
  </a>
</template>
