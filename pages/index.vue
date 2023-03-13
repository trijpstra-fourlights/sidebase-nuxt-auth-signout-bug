<template>
  <div v-if="loggedIn">
    <button @click="navigateTo('/logout')">logout</button>
  </div>
  <div v-else>
    <button
      @click="
        signIn('credentials', {
          username: 'jsmith',
          password: 'hunter2',
          callbackUrl: '/'
        })
      "
    >
      login
    </button>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, useSession } from '#imports';
definePageMeta({ auth: false });
const { status, signIn } = useSession();

const loggedIn = computed(() => status.value === 'authenticated');
</script>
