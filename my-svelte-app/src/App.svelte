<script>
	import ToDoList from "./component/toDoList.svelte"; 
	import TodoContent from "./component/input.svelte";
	let todos = [];
	const addToDo = (event) => {
    todos = [...todos, event.detail.todoContent];
}
	function handleDelte(event){
      let indexItem = event.detail.itemIndex;
      
      todos =  todos.filter((element) => {
          let elementIndex = todos.indexOf(element);
          return elementIndex !== indexItem;
  })
}

</script>
<main class="container">
 	<ToDoList todos = {todos}  on:deleteItem = {handleDelte} />
	<TodoContent on:addContent={addToDo} />

</main>













