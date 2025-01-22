<template>
    <h1>애니메이션 응용하기</h1>
    <button @click="newImg">다음 이미지</button>
    <Transition>
        <img v-if="imgActive === 'pizza'" src="./assets/img_pizza.svg">
        <img v-else-if="imgActive === 'apple'" src="./assets/img_apple.svg">
        <img v-else-if="imgActive === 'cake'" src="./assets/img_cake.svg">
        <img v-else-if="imgActive === 'fish'" src="./assets/img_fish.svg">
        <img v-else-if="imgActive === 'rice'" src="./assets/img_rice.svg">
    </Transition>
</template>
  
<script>
    export default {
        data() {
            return {
                imgActive: 'pizza',
                imgs: ['pizza', 'apple', 'cake', 'fish', 'rice'],
                indexNbr: 0
            }
        },

        methods: {
            newImg() {
                this.indexNbr++;
                if(this.indexNbr >= this.imgs.length) { // 끝까지 가면 초기화 하겠다.
                    this.indexNbr = 0;
                }
                this.imgActive = this.imgs[this.indexNbr];
            }
        }
    }
</script>

<style>
    .v-enter-active {
        animation: swirlAdded 1s;
    }

    .v-leave-active {
        animation: swirlAdded 1s reverse;
    }

    @keyframes swirlAdded {
        from {
            opacity: 0;
            rotate: 0;
            scale: 0.1;
        }
        
        to {
            opacity: 1;
            rotate: 360deg;
            scale: 1;
        }
    }

    img {
        width: 100px;
        margin: 20px;
    }

    img:hover {
        cursor: pointer;
    }
</style>