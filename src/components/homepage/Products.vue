<template>
    <div class="col mb-4">
            <div class="card">
                <img :src="wine.image" class="card-img-top mx-auto d-block" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ wine.name }}</h5>
                    <p class="card-text">{{ wine.description }}</p>
               
                </div>
                     <div class="card-footer">
                
                    <span v-on:click=selectedWine(wine)> <router-link to="/product" class="btn btn-primary">Details</router-link> </span>
                    <button href="#" class="btn btn-primary float-right" v-on:click=addToCart(wine)>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                        </svg>
                        {{ wine.price }}
                    </button>
                    </div>
            </div>
        </div>       

      
</template>

<script>
export default {

    props: {
        wine: {
            type:Object,
        },
    },

    methods:{
        addToCart(wine)
        {
            // console log to check if the wine is appearing or not
            // console.log(wine);
            //  push item to cart object in the storage
            this.$store.commit('addToCart', wine);
        },

        selectedWine(wine)
        {
            this.$store.commit('setSelectedWine', wine);
        }
    }

   

   
    
}
</script>


<style scoped>
/* card shadow by default */
.card {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

/* grow card shadow on hover */
.card:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-img-top {
    width: 30%;
    height: 15vw;
    object-fit: cover;
    position: center;
    
}


.card-body {
    height: 185px;
}


</style>