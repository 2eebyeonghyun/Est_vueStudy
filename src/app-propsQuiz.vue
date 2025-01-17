<template>
    <h1>Food</h1>
    <div class="wrapper">
        <props-quiz/>
    </div>
</template>

<script>
</script>

<style>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .wrapper > div {
        flex-basis: 150px;
        border: 1px dashed #000;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
</style>