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

     
      <router-link to="/about">About</router-link>
      </header>
      <main>

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
