<template>
   <div class="container">

                <div class="row">

                  <div class="col-sm">

                   <img class="image_selected" src="img/CastilloMonjardin.png" alt="">
                     </div>
                        <div class="col-sm">

                        <div class="product_name">Castillo Monjardin</div>

                        <div> <span class="product_price">199 :-</span>

                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio nemo cupiditate nulla, delectus ad esse at, eveniet debitis animi maxime laborum enim exercitationem aspernatur non eos illo quas reiciendis?</p>

                    </div>

                         <div class="row">
                        <div class="col-xs-6"> <button type="button" class="btn btn-danger shop-button">Add to cart</button> 
                    </div>
                </div>
                  
             </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .single_product {
      padding-top: 66px;
      padding-bottom: 140px;
      margin-top: 0px;
      padding: 17px
  }

  .product_name {
      font-size: 25px;
      font-weight: 400;
      margin-top: 60px;
      margin-left:26px;
      font-family: georgia;
  }


  .product_price {
      display: inline-block;
      font-size: 30px;
      font-weight: 500;
      margin-top: 9px;
      clear: left;
      margin-left:26px;
  }


  .product_info {
      display: inline-block
  }

  body {
      font-family: 'Rubik', sans-serif;
      font-size: 14px;
      font-weight: 400;
      background: #FFFFFF;
      color: #000000
  }

  div {
      display: block;
      position: relative;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box
  }

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

  .image_selected img {
      max-width: 100%
  }
</style>