<template>
     <div class="container">
            <div class="row pt-5 pb-5">
                <div class="col-12  mb-5 text-center">
                    <img width="50px" :src="require('../assets/wine.png')" alt="Rhino">
                </div>
                
                <div class="col-12">
                    <p class="text-center text-white">The Wine Experts. Trust us, we are alcoholics   © Copyright 2020</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {

    data(){
        return {
        // categories: this.$store.state.categories,
        }
            
    },
    mounted() {
        console.log(this.$store.state.isAdmin);
    },
    methods: {
        
    },

    computed: {
        
        isAdmin()
        {
            return this.$store.state.isAdmin;
        }
        
    }
};
</script>

<style scoped>

</style>