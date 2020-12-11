import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
        id:1,
        name:"Casa Marrone Appassimento",
        description:"Spicy taste with barrel character, hints of cherries, chocolate pralines, rum raisins and vanilla.",
        price:"99",
        origin:"Italy",
        image:require("../assets/appassimento.png"),
        category:1
      },
      {
        id:2,
        name:"Tommasi Adorato Appassionato",
        description:"Grape flavor with hints of yellow pear, almond, white peach and citrus peel.",
        price:"95",
        origin:"Italy",
        //https://stackoverflow.com/questions/53412106/linking-to-images-referenced-in-vuex-store-in-vue-js - require
        image:require("../assets/Tommasi.png"),
        category:2
      },
      {
        id:3,
        name:"Castillo Monjardin",
        description:"Spicy, fruity taste with barrel character, hints of dark cherries, chocolate, black currants, herbs, plums and coffee.",
        price:"119",
        origin:"Spain",
        image:require("../assets/CASTILLOMONJARDIN.png"),
        category:1
        },
        {
          id:4,
          name:"Mateus",
          description:"Fruity, pearly taste with hints of jelly raspberry, peach and blood orange.",
          price:"69",
          origin:"Portugal",
          image:require("../assets/MateusRosé.png"),
          category:3
          },
          {
          id:5,
          name:"Cuvée Madame",
          description:"Berry, very fresh taste with hints of strawberries, fresh herbs, rowanberries and blood grapefruit.",
          price:"129",
          origin:"France",
          image:require("../assets/CuvéeMadame.png"),
          category:3
          },
          
          {
          id:6,
          name:"Marquis de Beys Red",
          description:"Berry, very fresh taste with hints of strawberries, fresh herbs, rowanberries and blood grapefruit.",
          price:"199",
          origin:"Libanon",
          image:require("../assets/Marquis de Beys Red.png"),
          category:1
          },
          {
          id:7,
          name:"Kleine Zalze Vintner’s Selection Rosé",
          description:"Berry taste with hints of strawberries, blood grapefruit, herbs and watermelon.",
          price:"119",
          origin:"South Africa",
          image:require("../assets/kleineZalze.png"),
          category:3
          },
          {
          id:8,
          name:"Franschhoek Cellar Reserve Chardonnay",
          description:"Fruity, nuanced taste with barrel character, hints of yellow apples, minerals, nectarine, cardamom, butter and orange.",
          price:"79",
          origin:"South Africa",
          image:require("../assets/Franschhoek.png"),
          category:2
          },
          {
          id:9,
          name:"Viña Maipo",
          description:" Youthful, fruity taste with hints of yellow apples, pineapple, honey and herbs..",
          price:"59",
          origin:"Chile",
          image:require("../assets/Viña Maipo.png"),
          category:2 
        },
        {
          id:10,
          name:"Figli Luigi Oddero Barolo,",
          description:" Complex, spicy taste with barrel character, hints of cherries, roses, sandalwood, raspberries, nougat, orange, black tea and cinnamon.",
          price:"349",
          origin:"Italy",
          image:require("../assets/figliluigi.png"),
          category:1 
        },
          
    ], 
    categories:[
      {
        id:1,
        name:"Red wine"        
      },
      {
        id:2,
        name:"White wine"        
      },
      {
        id:3,
        name:"Category 3"        
      }
    ],   
    isAdmin:[],    
    cart:[],
    selectedWine: {}
   
  },

  getters: {
    getSelectedWine (state) {
      return state.selectedWine
    }
  },


  mutations: {

    setSelectedWine (state, wine){
      state.selectedWine = wine;
      console.log("Changed:", state.selectedWine)
    },

    addToCart(state, wine)
    {
      // check if cart already has this item or not
      let existingItems = state.cart.find( o => (o.id === wine.id) )
      
      if(existingItems){
          existingItems.qty += 1
      }else{
        let orders = {
          id:wine.id,
          name:wine.name,
          description:wine.description,
          qty:1,
          price:wine.price,
          origin:wine.origin,
          image:"",
          category:wine.category          
        }
        state.cart.push(orders)
      }      
      
      console.log(state.cart);
    }
   
  },

  actions: {
  },
  modules: {
  }
})



