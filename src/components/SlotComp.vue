<template>
    <!-- <div class="container">
        <header>
            슬롯은 무조건 slot이라는 이름으로만 만들어두진 않는다.
            <slot name="header">
                <h1>헤더인데 정의된게 있을때만 적용</h1>
            </slot>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div> -->

    <div>
        <slot></slot>
    </div>
</template>

<script>
    // export default {
    //     name: 'SlotComp'
    // }
</script>

<style scoped>
    div {
        background-color: lightgreen;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        flex-basis: 150px;
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 20px 10px 0 10px;
    }
    
    div:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>