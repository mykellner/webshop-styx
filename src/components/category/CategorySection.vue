<template>
    <div class="container">
            <!-- Section Title -->
            <div class="row">
                <h2 class="pb-5">Available Wines in <span class="text-success">{{ getCategoryName() }}</span> Category </h2>
            </div>
        <div class="row">
            
            <!-- smooth scroll to rubik section -->
                            
                    <!-- card column-->
                        <div class="col-md-12 col-lg-12">
                        <!--implementation of cards with card grid, 3 cols for xl, 2 for mds and 1 for rest-->
                            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">

                                <!-- cards with 3 columns max -->
                                <Products v-for="(wine, i) in getWines()" :key="i" :wine="wine" />

                            </div>
                        </div>
                    
                        
                </div>
    </div>
</template>

<script>
import Products from '../homepage/Products.vue'
export default {
    components:{ Products },

     data() {
        return {

            wines: this.$store.state.products,
            categories: this.$store.state.categories,
            
            
        }
    },
    methods:{
        getCategoryName(){
            return this.categories.find(category => category.id == this.$route.params.id).name
        },
        getWines(){
            return this.wines.filter(wine => wine.category == this.$route.params.id)
        }
    }

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