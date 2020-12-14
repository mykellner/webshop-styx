<template>
 <!-- Herosection -->
          <div class="jumbotron about-us">
               <div class=" container">
                   <div class="row">
                     <div class="col-sm"><h1>{{title}}</h1>
                        <p>{{abouttext}}</p>

                    <button type="button" class="btn btn-danger">Order your wine now</button>
           </div>
        </div>
    </div>
</div>

<!-- End of herosection -->

</template>

<script>
export default {
    data () {
        return {
            title: 'This is us',
            abouttext: 'Our Wineshop aims to bring the reality of the wine industry to the worlds attention, and to give these craftsmen of wine the chance to have their work recognised by an increasingly large public. The experts at Wineshop.it travel Italy in search of excellence. Before a wine enters our catalogue it undergoes rigorous tasting tests and only wines that pass these procedures are stocked. As you can imagine, for some of our wine-makers the number of bottles available for sale each year is somewhat limited. This is why you may occasionally find some wines out of stock, in which case we recommend that you book ahead.'
        }
    }
}
</script>



<style>

/*------------About us-------------*/

h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 60px;
    padding-bottom: 10px;
}

h4 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 17px;
    padding-bottom: 40px;
}

/*------------Herosection About us-------------*/

.about-us {
    /* background-image: url(img/about-wine.png); */
    text-align: center;
    padding: 100px;
    text-shadow: grey;
    background-size: cover;
    background-position: bottom right;
    margin: 0px;
}

button {
    background-color: rgb(111, 44, 44);
    border-color: white;
    width: 330px;
    height: 70px;
    
}

.btn-danger {
    font-size: 30px;
}

/*------------Second section - About wine-------------*/

.about-wine {
    background-color: rgb(244, 244, 244);
    text-align: center;
    padding: 100px;
}

</style>
