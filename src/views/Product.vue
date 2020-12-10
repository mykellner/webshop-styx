<template>
  <section id="cards-aside" class="pt-5 pb-5">
        <div class="container">
            <!-- Section Title -->
            <div class="row">
                <h2 class="pb-5">Wine Details</h2>
            </div>

            <product-detail />

           
            
        </div>
      </section>
</template>

<script>

import ProductDetail from '../components/ProductDetail.vue'


export default {
    components:{ProductDetail}
}
</script>