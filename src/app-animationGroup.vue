<template>
    <input type="text" v-model="inpName">
    <button @click="clickbtn">add</button>
    <TransitionGroup tag="ol">
        <li v-for="i in products" :key="i">{{ i }}</li>
    </TransitionGroup>
</template>
  
<script>
    export default {
        data() {
            return {
                products: ['사과', '딸기', '바나나'],
                inpName: ''
            }
        },

        methods: {
            clickbtn() {
                const el = this.inpName;
                this.products.push(el);
                this.inpName = null;
            }
        }
    }
</script>

<style>
    .v-enter-from {
        opacity: 0;
        rotate: 180deg;
    }

    .v-enter-to {
        opacity: 1;
        rotate: 0deg;
    }

    .v-enter-active {
        transition: all 0.7s;
    }
</style>