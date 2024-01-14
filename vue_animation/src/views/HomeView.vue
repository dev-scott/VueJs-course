<script setup>

import { ref } from 'vue'

const names = ref(["Selena Damo","Kevin store"])

const nameInput = ref("")

const addInvitee = ()=>{
    names.value.unshift(nameInput.value)
    nameInput.value=""
}


</script>

<template scoped >

    
<main>


    <div className="container">
        <input type="text" v-model="nameInput" @keypress.enter="addInvitee" placeholder="Add person to invite ...">
        <TransitionGroup name="invitees">

            <li v-for="name in names" :key="name">Selena Damo</li>
        </TransitionGroup>
    </div>
  
</main>


</template>


<style scoped>

.container{
    max-width: 300px;
    margin: 0 auto;

}

.container input{
    width: 100%;
    border-radius: 5px ;
    border: 1px solid rebeccapurple;
    padding: 10px;

    margin-bottom: 20px;
    box-shadow: 1px 1px 10px rebeccapurple;
}

ul{
    display: inline;
    list-style: none;
    margin: 0px ;

    padding: 0px;
}

li{
    list-style: none;
    width: 300px;
    border-radius: 5px;
    padding:5px 10px;
    margin-top: 10px;
    box-shadow: 1px 1px 10px rebeccapurple;
    text-align: center;
    cursor: pointer;
}

.invitees-enter-from{

    opacity:0

}

.invitees-enter-to{

}

.invitees-enter-active{

    transition:all 0.5s ease-in

}

.invitees-move{
    transition:all 0.5s ease;
}


</style>