<template>
    <div  >
        <h2>Order Details</h2>
        <p>
            Order Number: <br>
            Name: {{ item.clientInfo.name}}<br>
            Email: {{ item.clientInfo.email}}
        </p>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                
                </tr>
            </thead>
            <tbody>
                <tr v-for="(detail, i) in item.cartItems" :key=i>
                    <th scope="row">{{ detail.name }}</th>
                    <td>{{ detail.qty }}</td>
                    <td>{{ detail.price }}</td>                
                </tr>
                
            </tbody>
        </table>

        <hr />
        
    </div>
    
</template>

<script>
export default {
    props: {
        item: {
            type:Object,
        },
    }

        


        
}
</script>

<style scoped>

</style>