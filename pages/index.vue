<template>
  <section>
    <div class="container px-5 py-24 mx-auto">
      <h1 class="text-pink-500 text-5xl">Blog №1</h1>
      <NuxtLink to="/mountain">Горы</NuxtLink>
      <NuxtLink to="/cms">CMS</NuxtLink>
      <div class="">
        <div v-for="(post, index) in posts" :key="index">
          <h3>{{ post.attributes.Title }}</h3>
          <p>{{ post.attributes.Description }}</p>
        </div>
        <pre>{{ data }}</pre>
      </div>
    </div>
  </section>
</template>

<script setup>

const query = gql`
  query getPosts {
    posts{
    data{
      id
      attributes {
      	Title
        Description
        slug
    	}
    }
  }
  }
`
const { data } = useAsyncQuery(query, {clientId: 'rick'} )
const posts = data.value ? data.posts : []
defineExpose({
    posts,
  });

console.log(data)

</script>

<style scoped></style>

