<template>
    
            <tr>            
                <td>{{ item.name }}</td>
                <td>
                   
                    {{ item.qty }}
                    
                </td>
                <td>{{ item.qty * item.price }} 
                    <button type="button" class="btn btn-outline-danger btn-sm float-right" v-on:click="deleteItem(item)">Delete</button></td>
            </tr>

</template>

<script>
export default {
    props: {
        item: {
            type:Object,
        },
        
    },
    computed: {
       
    },
    methods:{
        deleteItem(item){
            this.$store.commit('deleteItemFromCart',item)
            
        }
    }

}
</script>