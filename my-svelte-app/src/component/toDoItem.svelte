<script>
    import Box from './card.svelte';
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();
    export let todo;
    export let todos;
    
    function handleRemove(){
        let itemIndex = todos.indexOf(todo) ;
        dispatch("deleteItem",{itemIndex});
    }

</script>
<main>
    <Box >
        <li>{todo}</li>
       <button class="deleteBtn" on:click={handleRemove}>X</button>
    </Box>
    
</main>

<style>
    li {
        list-style-type: none;
        color:black;
    }
    .deleteBtn{   
        position: absolute;
        right: 5%;
        color:black;
        border-radius: 45%;
        top:10%;
        line-break: auto;
    }
    .deleteBtn:hover{
        color:white;
        background: #000;
    }
  


</style>