<template>
    
    <div class="row">
        <!-- search through wines -->
            <div class="active-cyan-3 active-cyan-4 mb-4 col-md-12 col-lg-12">
                <input v-model="keyword" class="form-control" type="text" placeholder="Search Wines" aria-label="Search" >
            </div>

        <!-- smooth scroll to rubik section -->
                         
                <!-- card column-->
                    <div class="col-md-12 col-lg-12">
                    <!--implementation of cards with card grid, 3 cols for xl, 2 for mds and 1 for rest-->
                        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">

                            <!-- cards with 3 columns max -->
                            <Products v-for="(wine, i) in getWines" :key="i" :wine="wine" />

                        </div>
                    </div>
                
                    
            </div>
</template>

<script>
import Products from './Products.vue'
export default {
    components:{ Products },

     data() {
        return {
            keyword: '',
            wines: this.$store.state.products, // original data
        }
    },

    computed: {
        // get wines all wine when search is not happening      
        getWines(){
            // get all the wine when search is empty or match wine to search keyword
            return this.wines.filter( wine => {
                return !this.keyword || wine.name.toLowerCase().indexOf(this.keyword.toLowerCase()) > -1
            })
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