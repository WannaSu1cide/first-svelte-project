<script>
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();
    export  let todoContent = '';
   

    const handleSubmit = () => {
    if(todoContent.length == 0){
        alert("You must type something");     
    }else {
        dispatch("addContent", {todoContent});
        todoContent = "";
    }
   }
</script>
<form >
    <input type="text" bind:value = {todoContent} >
    <button on:click|preventDefault = {handleSubmit} >
        Add Work
    </button>

</form>

<style>
    form{
        position: relative;
        top: 5%;
        left: 40%;
    }

</style>