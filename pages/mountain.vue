<script setup>


const { data: mountains, pending, error, refresh } = await useAsyncData(
  'countries',
  () => $fetch('https://api.nuxtjs.dev/mountains')
)

// const { data: mountains, countries } = await useFetch(
//   'https://api.nuxtjs.dev/mountains',  
// )

defineExpose({
  countries: 'name'
  })


console.log(mountains)
</script>

<template>
  <NuxtLink to="/">Главная</NuxtLink>
  <NuxtLink to="/cms">CMS</NuxtLink>
  <pre class="text-sm text-left overflow-auto">{{ mountains }}</pre>
  <div class="flex flex-col md:flex-row md:flex-wrap">
    <div v-for="mountain in mountains" :key="mountain.index" class="w-[250px] m-10">
      <h2>{{ mountain.title }}</h2>
      <p>{{ mountain.countries }}</p>
      <img :src="mountain.image" alt="" class="">
    </div>
  </div>
</template>
