<template>
    <section id="cards-aside" class="pt-5 pb-5">
        <shopping-cart />
        <shipping-info />
    </section>
    
</template>

<script>

import ShippingInfo from '../components/checkout/ShippingInfo.vue';
import ShoppingCart from '../components/checkout/ShoppingCart.vue';
export default {
    components:{ShippingInfo, ShoppingCart},
}
</script>

<style scoped>

.checkout {
    justify-content: center;
    padding-top: 20px;
}


.btn {
      background-color: rgb(97, 37, 37);
      border-color: white; 
      width: 150px;
      height: 50px;
      font-size: 20px;
  }

  .confirmationrow {
      justify-content: center;
      padding-top: 20px;
  }

 

</style>