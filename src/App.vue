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
                        <a href="#rubiks" class="mt-5 mb-5 btn btn-lg btn-outline-light">Button to?</a>
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
                                        <p class="card-text">Product information..l</p>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgb(106, 106, 180);
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
