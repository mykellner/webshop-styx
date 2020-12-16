<template>
    <section id="cards-aside" class="pt-5 pb-5">
        <order-page />
    </section>
    
</template>

<script>

// import ShippingInfo from '../components/checkout/ShippingInfo.vue';
// import ShoppingCart from '../components/checkout/ShoppingCart.vue';
import OrderPage from '../../components/orders/OrderPage.vue'

export default {
    components:{OrderPage},
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