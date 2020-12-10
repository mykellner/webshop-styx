<template>
  <div class="row">
                <div class="col-lg-4 order-lg-2 order-1">
                        <div class="image_selected"><img src="img/CastilloMonjardin.png" alt=""></div>
                    </div>
                    <div class="col-lg-6 order-3">
                        <div class="product_description">
                       
                           
                           <div class="product_name">Castillo Monjardin</div>
                           <div> <span class="product_price">199 :-</span>
                               </div>
                               <div class="single_product">
                                   <div class="container-fluid" style=" background-color: #fff; padding: 11px;">
                            <div> <span class="product_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem suscipit pariatur reiciendis natus, numquam asperiores. Quae, dolorum est voluptatem quidem, deserunt dolorem nisi ad magni, hic eum corporis optio!</span> </div>
                            <div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="br-dashed">
                                            <div class="row">
                                                <div class="col-md-3 col-xs-3"> <img src="#" alt=""> </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6"> </div>
                                </div>
                                
                            <hr class="singleline">
                            <div class="order_info d-flex flex-row">
                                <form action="#">
                                </form> </div>
                            <div class="row">
                                <div class="col-xs-6"> <button type="button" class="btn btn-danger shop-button">Add to cart</button> 
                                </div>
                            </div>
                        </div>
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