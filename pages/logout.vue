<template>signing you out</template>

<script lang="ts" setup>
definePageMeta({
  auth: false,
});

const { status, signOut } = useSession();

function resolveAfter2Seconds(x: unknown) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

if (status.value === 'authenticated') {
  // async stub method
  await resolveAfter2Seconds(true)

  await signOut({ callbackUrl: '/logged-out' });
}
</script>
