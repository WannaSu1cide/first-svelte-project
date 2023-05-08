<script>
  import { element } from "svelte/internal";
    import CustomToDoItem from "./toDoItem.svelte";    
	  export let todos = [] ;
 

  </script>
  
  <ul>
  {#each todos as todo}
    <CustomToDoItem {todo} todos = {todos} on:deleteItem/>
  {/each}
  </ul>

<style>
  ul{
    position: absolute;
    top:10%;
    left: 25%;  
  }
</style>
  