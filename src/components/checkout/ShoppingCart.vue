<template>
    <div class="container">
        
        <table class="table table-hover" >
        <thead>
            <tr>            
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
                 <cart-object v-for="(item,i) in getCartItems" :key="i" :item="item"/>       
            <tr>            
                <td colspan="2">Grant Total:</td>
                <td>{{ totalPrice }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import CartObject from './CartObject.vue';
export default {
    components: {CartObject},
    
    computed:{
        getCartItems(){
            return this.$store.getters.getCartItems
        },
    
        }
}
    
</script>