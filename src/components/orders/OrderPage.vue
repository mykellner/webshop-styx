<template>
    <div class="container" >
        <div v-if="isAdmin">
            <order-item v-for="(item, i) in getOrderItems" :key="i" :item="item" />
        </div>
        
        <div class="alert alert-warning" role="alert" v-else>
            YOU NEED TO LOGIN FIRST!
        </div>
        
        
        
    </div>
</template>

<script>
// import CartObject from './CartObject.vue';
import OrderItem from './OrderItem.vue'
export default {
    components: {OrderItem},
    
    computed:{
        //get data from state.order
        getOrderItems(){
            return this.$store.getters.getOrderItems
    },
    // check if logged in as admin
    isAdmin()
        {
            return this.$store.state.isAdmin;
        }
    }

}
</script>