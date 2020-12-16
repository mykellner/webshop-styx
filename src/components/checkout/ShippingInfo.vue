<template>
    <div class="container">
        <div class="row checkout">
            <div class="col-6">
            <form v-on:submit="confirmation" v-show="formShow">
            <div class="form-group">
                <label for="name">Name</label>
                <input v-model="clientInfo.name" type="name" class="form-control" id="name" placeholder="Your name">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input  v-model="clientInfo.email" type="email" class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="card-details">Card Details</label>
                <input  v-model="clientInfo.card" type="card-details" class="form-control" id="card-details" placeholder="Card details">
            </div>
            <button type="submit" class="btn btn-danger shop-button">Submit order</button>
            </form>
        </div>
        </div>

        <div class="row confirmationrow">
            <div class="confirmation-div">
                <p v-show="conf">{{confText}}</p>
            </div>
            </div>

        

    </div>
</template>

<script>
export default {
    data () {
        return {
        confText: 'Thank you for your order, we will send you a confirmation with the order details to your email.',
        conf: false,
        formShow: true,
        clientInfo:
            {
                name:'',
                email:'',
                card:''
            },
        order:''
        }
    },
    methods: {
        
            confirmation (e) {

                // prepare the item to be moved from state.cart and the form above to state.order
                this.order = {
                    clientInfo:this.clientInfo,
                    cartItems:this.getCartItems                    
                };
                this.$store.commit('setOrder', this.order); // move the data to state.order
                

                e.preventDefault()
                this.conf = true
                this.formShow = false


                // console.log(this.clientInfo);

            },

            

            
            
        //    return document.querySelector(".confirmation-div").style.display = 'none';
            
            //  p.insertAdjacentHTML('afterbegin', )
        
    },

    computed:{

        getCartItems(){
            return this.$store.getters.getCartItems
        },
    }
}
</script>

<style scoped>

.checkout {
    justify-content: center;
    padding-top: 20px;
}


.btn {
      background-color: rgb(97, 37, 37);
      border-color: white; 
      width: 150px;
      height: 50px;
      font-size: 20px;
  }

  .confirmationrow {
      justify-content: center;
      padding-top: 20px;
  }

 

</style>