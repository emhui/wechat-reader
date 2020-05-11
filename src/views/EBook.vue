<template>
  <div>
      <e-book></e-book>
  </div>
</template>

<script>
export default {
    components: {
        EBook: () => import('../components/EBook/index')
    }
}
</script>

<style>

</style>