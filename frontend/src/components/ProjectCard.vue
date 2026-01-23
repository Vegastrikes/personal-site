<script setup lang="ts">
    import AnchorButton from './AnchorButton.vue';

</script>

<template>
    <div>
        <div class="rounded-2xl border border-primaryHigh bg-ghost p-5 shadow-sm">
        <p class="text-sm font-semibold text-textDark">SaaS Dashboard</p>
        <p class="mt-2 text-sm">
            SaaS Dashboard: auth, projects CRUD, stats, and a modern UI.
        </p>

        <div class="mt-4 flex flex-wrap gap-2">
            <span class="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">Vue 3</span>
            <span class="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">Pinia</span>
            <span class="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">Tailwind</span>
            <span class="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">Node</span>
            <span class="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700">Postgres</span>
        </div>

        <div class="mt-5 flex gap-3">
            <AnchorButton variant="primary" href="https://YOUR_DEMO_URL">Live Demo</AnchorButton>
            <AnchorButton variant="ghost" href="https://YOUR_DEMO_URL">Live Demo</AnchorButton>
        </div>
        </div>
    </div>
</template>