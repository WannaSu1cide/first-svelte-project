<div class="Wrapli">
    <ul class="card">
    <slot></slot>
</ul>
</div>


<style>

.card{
    width : 500px;
    height:50px;
    border-radius: 25px;
    background-color: antiquewhite;
    position: relative;
    top: 30%;
    left: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
}
.card:hover {
  background-color: #000;
}
.card:hover > :global(li) {
    color: #fff;
}




</style>