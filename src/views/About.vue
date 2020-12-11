<template>
 <!-- Herosection -->
          <div class="jumbotron about-us">
               <div class=" container">
                   <div class="row">
                     <div class="col-sm"><h1>This is us</h1>
                        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet odit doloribus odio, sapiente, nisi qui labore vel inventore nam quod voluptatem laborum praesentium numquam asperiores, deleniti iure. Dolore, praesentium! Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates eius ducimus error maiores cupiditate blanditiis illo expedita saepe deserunt. Sapiente enim quas asperiores voluptates repellendus incidunt nam temporibus quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere facilis aliquam dolore asperiores vel tenetur explicabo repudiandae. Dolorem animi ut eveniet, assumenda, beatae debitis aperiam reprehenderit inventore atque ducimus et.</h4>

                    <button type="button" class="btn btn-danger">Order your wine now</button>
           </div>
        </div>
    </div>
</div>

<!-- End of herosection -->

<!-- Jumbotron with image and text about wine -->

    <div class="jumbotron about-wine">
        <div class="container">
            <div class="row">
                <div class="col-sm"><img class="img-fluid" src="img/wineyard.jpg" alt="">
                </div>
                     <div class="col-sm"><h1>Well selected wines just for you</h1>
                         <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet odit doloribus odio, sapiente, nisi qui labore vel inventore nam quod voluptatem laborum praesentium numquam asperiores, deleniti iure. Dolore, praesentium! Accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptates eius ducimus error maiores cupiditate blanditiis illo expedita saepe deserunt. Sapiente enim quas asperiores voluptates repellendus incidunt nam temporibus quaerat!</h4>

                    </div>
                </div>
            </div>
        </div>
<!-- End of jumbotron -->
</template>



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
    background-image: url(img/about-wine.png);
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
    width: 300px;
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

</template>
