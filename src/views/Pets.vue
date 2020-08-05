<template>
  <div>
    <h1>{{ animal.name }} ({{ animal.species }})</h1>
    <p>Age: {{ animal.age }}</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState(['dogs', 'cats'])
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id]
    const species = this.$route.params.species
    this.animal = { ...animal, species }
  }
}
</script>
