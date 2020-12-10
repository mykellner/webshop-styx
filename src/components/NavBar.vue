<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark scrolling-navbar">
                <div class="d-flex flex-grow-1">
                    <span class="w-100 d-lg-none d-block"></span>
                    <!-- logo for full menu -->
                     <router-link to="/" class="navbar-brand d-none d-lg-inline-block">The Wine Exports</router-link> |
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
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link m-2 menu-item">About us</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            
                            <div class="btn-group m-2">
                                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ howManyOrders }} Items
                                </button>
                                <div class="dropdown-menu">
                                         
                                    <router-link to="" class="dropdown-item">Checkout</router-link>                                                                  
                                    <!-- <a class="dropdown-item" href="/checkout">Checkout</a> -->
                                </div>
                                </div>
                        </li>
                    </ul>
                </div>
            </nav>
</template>

<script>
export default {

    computed: {
        howManyOrders()
        {
            return this.$store.state.cart.length;
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