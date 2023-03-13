<template>
  <div>You are {{ status }}</div>
  <div><NuxtLink to="/">back to begin</NuxtLink></div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
definePageMeta({ auth: false });

const { status } = useSession();
</script>
