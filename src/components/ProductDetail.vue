<template>
   <div class="container">
   
                <div class="row">

                  <div class="col-6">

                     <img :src="wine.image" class="image" alt="">

                     </div>
                        <div class="col-6 product-information">
                            <div class="product-info">

                        <div class="product_name">{{wine.name}}

                        <span class="product_price">{{wine.price}} :- </span>
                        </div>

                         <p>{{wine.description}}</p>

                    </div>

                         <div class="row button-div">
                        <button type="button" class="btn btn-danger shop-button">Add to cart</button> 
                    
                </div>
                  
             </div>
        </div>
    </div>
</template>

<script>
export default {

    computed: {
        wine () {
            return this.$store.state.selectedWine
        }
    }
  
}
</script>

<style scoped>
  /* .single_product {
      padding-top: 66px;
      padding-bottom: 140px;
      margin-top: 0px;
      padding: 17px
  } */

  .product_name {
      font-size: 25px;
      font-weight: 400;
      /* margin-top: 60px;
      margin-left:26px; */
      font-family: georgia;
      
  }

  .product-information {
      padding: 20px;
  }


  .product_price {
      /* display: inline-block; */
      font-size: 30px;
      font-weight: 500;
      margin-top: 9px;
      /* clear: left; */
      /* margin-left:26px; */
  }

  body {
      font-family: 'Rubik', sans-serif;
      font-size: 14px;
      font-weight: 400;
      background: #FFFFFF;
      color: #000000
  }

  /* div {
      display: block;
      position: relative;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box
  } */

  ul {
      list-style: none;
      margin-bottom: 0px
  }

  .btn {
      background-color: rgb(97, 37, 37);
      border-color: white; 
      width: 150px;
      height: 50px;
      font-size: 20px;
      margin-left: 10px;
  }

  .button-div {
      margin-top: 20px;
      
  }

  .single_product {
      padding-top: 16px;
      padding-bottom: 140px
  }


  .image_selected {
    display: flex;
      flex-direction: column;
      justify-content: right;
      align-items: right;
      width: 25%;
      padding: 15px;
      margin-right: 0px;
      margin-left: 250px;
      margin-top: 10px;
  }

  .image {
    height: 30vw;
  }
</style>