<template>
  <section>
    <div class="container">
        <NuxtLink to="/">Главная</NuxtLink>
  <NuxtLink to="/mountain">Горы</NuxtLink>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <pre>{{ data }}</pre>
          <!-- <div v-for="(post, index) in posts" :key="index">
            <h3>{{ post.attributes.Title }}</h3>
            <p>{{ post.attributes.Description }}</p>
          </div> -->

          <pre>{{ data.posts }}</pre>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

const query = gql`
  query getPosts {
    posts {
      data {
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

const { data } = useAsyncQuery(query)
// const posts = data ? data.posts.data : []


console.log(data)
</script>


<style scoped>

</style>