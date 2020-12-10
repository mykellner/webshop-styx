<template>
    <div class="container-full-bg">
                <div class="jumbotron jumbotron-fluid mb-0">
                    <div class="container align-middle text-center text-white pt-5">

                        <h3 class="text-white">
                            Did you say wine?
                        </h3>
                        <h1 class="text-white">Because, we well wine!</h1>
                        
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
</template>

<script>
export default {
    
}
</script>
<style scoped>
/*--------------------------Jumbotron Style---------------------------*/


.jumbotron{
    background-image: url("../assets/header.jpg") ;
    background-position: center center;
    /* height: 100vh; */
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

</style>