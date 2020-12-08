import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {
        id:"1",
        name:"Casa Marrone Appassimento",
        description:"Kryddig smak med fatkaraktär, inslag av körsbär, chokladpraliner, romrussin och vanilj.",
        price:"99",
        origin:"Italien",
        image:"",
        category:"Red wine"
      },
      {
        id:"2",
        name:"Tommasi Adorato Appassionato",
        description:"Druvig smak med inslag av gula päron, mandel, vit persika och citrusskal.",
        price:"95",
        origin:"Italien",
        image:"",
        category:"White wine"
      },
      {
        id:"3",
        name:"",
        description:"",
        price:"",
        origin:"",
        image:"",
        category:""
      }
    ], 
    categories:[
      {
        id:"1",
        name:""        
      },
      {
        id:"2",
        name:""        
      },
      {
        id:"3",
        name:""        
      }
    ],   
    isAdmin:[],    
    cart:[],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
