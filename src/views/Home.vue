<template>
  <section id="cards-aside" class="pt-5 pb-5">
        <div class="container">
            <!-- Section Title -->
            <div class="row">
                <h2 class="pb-5">Available Wines</h2>
            </div>

            <wine-section />
            
        </div>
      </section>
</template>

<script>
import WineSection from "../components/homepage/WineSection.vue"
export default{
  components:{
    WineSection
  }
}
// @ is an alias to /src
</script>

<style scoped>

</style>
