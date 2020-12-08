<template>
  <div id="app">
    <div id="nav">
        <header>

            <!--fixed navigation on top of the page-->
            <nav-bar />

            <!-- display jumbotron -->
            <jumbo-tron />


            <!-- display main content -->
            <router-view/>

            

     
      </header>
      <main>

          

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
