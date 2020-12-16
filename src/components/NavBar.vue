<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark scrolling-navbar">
                <div class="d-flex flex-grow-1">
                    <span class="w-100 d-lg-none d-block"></span>
                    <!-- logo for full menu -->
                     <router-link to="/" class="navbar-brand d-none d-lg-inline-block">The Wine Exports</router-link> 
                    <!-- <a class="navbar-brand d-none d-lg-inline-block" href="#"> -->
                  
                    <!-- logo for collapsed menu -->
                    <router-link to="/" class="navbar-brand mx-auto d-lg-none d-inline-block">The Wine Exports
                    </router-link>
                    <div class="w-100 text-right">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>

                <!-- navigation wrapper -->
                <div class="collapse navbar-collapse flex-grow-1 text-right mr-5" id="myNavbar">
                    <ul class="navbar-nav ml-auto flex-nowrap">

                        <li class="nav-item">
                            <router-link to="/" class="nav-link m-2 menu-item">Home</router-link>
                        </li>

                        <li class="nav-item dropdown" > 
                           <a class="nav-link dropdown-toggle m-2 menu-item" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                           </a>                      
                        
                            <div class="dropdown-menu bg-dark"  aria-labelledby="navbarDropdown" >
                                <router-link v-for="(category, i) in categories" :key="i" :to="'/category/'+category.id" class="nav-link m-2 menu-item ">
                                    {{ category.name }}
                                </router-link>
                                
                            </div>
                        </li>

                        <li class="nav-item">
                            <router-link to="/about" class="nav-link m-2 menu-item">About us</router-link>
                        </li>

                        <li class="nav-item dropdown">
                            
                            <div class="btn-group m-2">
                                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ howManyOrders }} Items
                                </button>
                                <div class="dropdown-menu">
                                         
                                    <router-link to="/checkout" class="dropdown-item">Checkout</router-link>                                                                  
                                    <!-- <a class="dropdown-item" href="/checkout">Checkout</a> -->
                                </div>
                                </div>
                        </li>
                        <li class="nav-item" >                            
                            <router-link  class="nav-link m-2 menu-item"  @click.native="switchAdmin" to=""> 
                                <!-- show if isAdmin is true -->
                               <span v-if="isAdmin">Logout as Admin</span> 
                               <!-- show if isAdmin is false -->
                               <span v-else> Login as Admin </span>
                            </router-link>
                        </li>
                        <!-- show if logged in as administrator -->
                        <li class="nav-item"  v-if="isAdmin">
                             <router-link to="/orders" class="nav-link m-2 menu-item">Orders</router-link>    
                        </li>
                    </ul>
                </div>
            </nav>
</template>

<script>
export default {

    data(){
        return {
            // get categories from state
        categories: this.$store.state.categories,
        }
            
    },
   
    methods: {
        // login or log out the admin, calls mutation in the store file
        switchAdmin()
        {
            this.$store.commit('loginAsAdmin');
        }
    },

    computed: {
        // count how many unique items have been added to cart
        howManyOrders()
        {
            return this.$store.state.cart.length;
        },
        // check if logged in as admin or not.
        isAdmin()
        {
            return this.$store.state.isAdmin;
        }
        
    }
};
</script>

<style scoped>
/*set navbar opacity*/
.navbar{
    opacity: 0.9;
}
</style>