<template>
    <section id="checkout" class="pt-5 pb-5">
        <shopping-cart v-for="(item, i) in cartItems" :key="i" :item="item" />

        <shipping-info />
    </section>
        
</template>

<script >
import ShippingInfo from '../components/checkout/ShippingInfo.vue'
import ShoppingCart from '../components/checkout/ShoppingCart.vue'
export default {
    components: { ShippingInfo, ShoppingCart},
    
    data(){

    },
    computed:{
        cartItems(){
            return this.$store.state.cart
        }
    }
}
</script>

<style scoped> 

</style>