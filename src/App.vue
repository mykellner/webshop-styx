<template>
  <div id="app">
    <div id="nav">
        <header>

            <!--fixed navigation on top of the page-->
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark scrolling-navbar">
                <div class="d-flex flex-grow-1">
                    <span class="w-100 d-lg-none d-block"></span>
                    <!-- logo for full menu -->
                     <router-link to="/" class="navbar-brand d-none d-lg-inline-block">The Wine Exports</router-link> |
                    <!-- <a class="navbar-brand d-none d-lg-inline-block" href="#"> -->
                  
                    <!-- logo for collapsed menu -->
                    <router-link to="/" class="navbar-brand mx-auto d-lg-none d-inline-block">The Wine Exports
                    </router-link>
                    <div class="w-100 text-right">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>

                <!-- navigation wrapper -->
                <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                    <ul class="navbar-nav ml-auto flex-nowrap">

                        <li class="nav-item">
                            <router-link to="/about" class="nav-link m-2 menu-item">About us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" class="nav-link m-2 menu-item">Other page..</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/" class="nav-link m-2 menu-item">Checkout</router-link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container-full-bg">
                <div class="jumbotron jumbotron-fluid mb-0">
                    <div class="container align-middle text-center text-white pt-5">

                        <h3 class="mt-5 pt-5 text-white">
                            WINE..?
                        </h3>
                        <h1 class="text-white">WINE!</h1>

                        <!-- smooth scroll to rubik section -->
                         <input type="text" placeholder="Type your search.." class="searchfield" v-on:keyup="search">
                        <p>
                            <!-- bouncing svg arrow down -->
                            <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-chevron-double-down bounce" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </p>



                    </div>
                </div>
            </div>

     
      </header>
      <main>

           <div class="row">
                <!-- card column-->
                    <div class="col-md-12 col-lg-12">

                      
                    <!--implementation of cards with card grid, 3 cols for xl, 2 for mds and 1 for rest-->
                        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">

                            <!-- cards with 3 columns max -->

                            <div class="col md-4">
                                <div class="card">
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Product name..</h5>
                                        <p class="card-text">Product information..l</p>
                                        <a href="https://laravel.com" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>

                               <div class="col md-4">
                                <div class="card">
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Product name..</h5>
                                        <p class="card-text">Product information..l</p>
                                        <a href="https://laravel.com" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>

                               <div class="col md-4">
                                <div class="card">
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Product name..</h5>
                                        <p class="card-text">Product information..l</p>
                                        <a href="https://laravel.com" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>

                               <div class="col md-4">
                                <div class="card">
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Product name..</h5>
                                        <p class="card-text">Product information..l</p>
                                        <a href="https://laravel.com" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>

                               <div class="col md-4">
                                <div class="card">
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Product name..</h5>
                                        <p class="card-text">Product information..l</p>
                                        <a href="https://laravel.com" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>

                               <div class="col md-4">
                                <div class="card">
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">Product name..</h5>
                                        <p class="card-text">Product information.. try search</p>
                                        <a href="https://laravel.com" class="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>

                            

                        </div>
                      </div>
                    </div>

      </main>
      <footer>

      </footer>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
  search: function (){
    let input = document.querySelector(".searchfield")
    let cards = document.querySelectorAll(".card");
    for(let card of cards){
      console.log(card.textContent);
        if(card.textContent.toLowerCase().includes(input.value.toLowerCase())){
            card.style.display = "flex";
        } else {
            card.style.display = "none"
        }
    }
    }
}
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

/*--------------------------Navbar Jumbotron Style---------------------------*/
/*set navbar opacity*/
.navbar{
    opacity: 0.9;
}

.jumbotron{
    /* background-image: url("../assets/images/header.png") ; */
    background-position: center center;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}

.jumbotron button{
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
}

.jumbotron p{
    text-align: center;
}

/* arrow down icon bounce assisted by keyframe*/
.bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
}

/* bounce keyframe from -moz*/
@-moz-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        -moz-transform: translateY(0);
        transform: translateY(0);
    }
    40% {
        -moz-transform: translateY(-30px);
        transform: translateY(-30px);
    }
    60% {
        -moz-transform: translateY(-15px);
        transform: translateY(-15px);
    }
}
/* bounce keyframe from webkit*/
@-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    40% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
    }
    60% {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
    }
}

/* bounce keyframe */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    40% {
        -moz-transform: translateY(-30px);
        -ms-transform: translateY(-30px);
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
    }
    60% {
        -moz-transform: translateY(-15px);
        -ms-transform: translateY(-15px);
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
    }
}



/*--------------------------End of navbar and jumbotron css and start of content------------------*/
/* rubiks cards-aside section background colour*/
#rubiks {
    background-color: #ecf0f1;
}
#cards-aside{
    background-color: #f7f1e3;
}

/* card shadow by default */
.card {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

/* grow card shadow on hover */
.card:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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
