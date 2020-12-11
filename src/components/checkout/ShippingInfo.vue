<template>
    <div class="container">
        <div class="row checkout">
            <div class="col-6">
            <form v-on:submit="confirmation" v-show="formShow">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="name" class="form-control" id="name" placeholder="Your name">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="card-details">Card Details</label>
                <input type="card-details" class="form-control" id="card-details" placeholder="Card details">
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
        formShow: true
        }
    },
    methods: {
        
            confirmation (e) {
                e.preventDefault()
                this.conf = true
                this.formShow = false

            }
            
        //    return document.querySelector(".confirmation-div").style.display = 'none';
            
            //  p.insertAdjacentHTML('afterbegin', )
        
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