<template>
    <div class="col mb-4">
            <div class="card">
                <img src="assets/images/how-to-setup-laravel-5.7.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                    <a href="#" class="btn btn-primary">Details</a>
                    <a href="#" class="btn btn-primary">{{ product.price }}</a>
                </div>
            </div>
        </div>       

      
</template>

<script>
export default {

    props: {
        product: {
            type:Object,
        },
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
</style>