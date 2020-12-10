<template>
  <div id="app">
    <div id="nav">
        <header>
            <!--fixed navigation on top of the page-->
            <nav-bar />

            <!-- display jumbotron -->
            <jumbo-tron />

                
      </header>
      <main>

           <!-- display main content -->
            <router-view/>     

      </main>
      <footer>

      </footer>
    </div>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import JumboTron from './components/JumboTron.vue'

export default {

  components:{ NavBar, JumboTron },

  
  
  
  
    //   methods: {
    //   search: function (){
    //     let input = document.querySelector(".searchfield")
    //     let cards = document.querySelectorAll(".card");
    //     for(let card of cards){
    //       console.log(card.textContent);
    //         if(card.textContent.toLowerCase().includes(input.value.toLowerCase())){
    //             card.style.display = "flex";
    //         } else {
    //             card.style.display = "none"
    //         }
    //     }
    //     }
    // }
}

</script>

<style>

/*import fonts from google font library*/
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@700&display=swap');


/*basic bootstrap overrides*/

/*smooth out the scroll*/
html {
    scroll-behavior: smooth;
}

/*update font family*/
body, p, li, div{
    font-family: 'Open Sans', sans-serif;

}

/*update attributes for headings*/
h1, h2, h3, h4, h5{
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    color: #485460 !important;
}

p{
    text-align: justify;
}

footer{
    background-color: #353b48;
}

/*heading shadow and font size*/
header h1{
    font-size: 5.5vh;
    text-shadow: 2px 2px 2px #000;
}
header h3 {
    text-shadow: 2px 2px 2px #000;
    font-size: 3.5vh;
}


/*---------------------- Media queries over rides ---------------------------------*/

@media screen and (min-width: 576px) {  }


@media screen and (min-width: 768px) {
    /* padding increased */
    .jumbotron .container{
        padding-top: 7rem!important;

    }
}


@media screen and (min-width: 992px) {
    /* padding increased */
    .jumbotron .container{
        padding-top: 7vh!important;

    }
    /* font size adjusted*/
    .jumbotron h1{
        font-size: 3.5rem;
    }

    /*each even instances of row inside rubiks section should have row reverse */
    #rubiks div.row:nth-child(even) {
        flex-direction: row-reverse;
    }
}


@media screen and (min-width: 1200px) {
    /* padding increased */
    .jumbotron .container{
        padding-top: 14vh!important;
    }
    /* padding increased */
    .jumbotron h1{
        font-size: 4.5rem;
    }
}

</style>


/*-------- Product page html ----------*/

<body>
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
</body>
</html>

/*-------- Product page CSS ----------*/

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