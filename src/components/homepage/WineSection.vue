<template>
    <div class="row">
                <!-- card column-->
                    <div class="col-md-12 col-lg-12">
                    <!--implementation of cards with card grid, 3 cols for xl, 2 for mds and 1 for rest-->
                        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">

                            <!-- cards with 3 columns max -->
                            <Products />

                        </div>
                    </div>
                
                    
            </div>
</template>

<script>
import Products from './Products.vue'
export default {
    components:{ Products }
} 
</script>

<style scoped>


/*--------------------------End of navbar and jumbotron css and start of content------------------*/
/* rubiks cards-aside section background colour*/
#rubiks {
    background-color: #ecf0f1;
}
#cards-aside{
    background-color: #f7f1e3;
}




</style>