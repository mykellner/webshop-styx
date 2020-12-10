<template>
<div class="row d-flex checkout">
    <div class="col-6">
        <form>
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

    
</template>

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


</style>