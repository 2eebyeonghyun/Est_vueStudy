<template>
    <!-- <div id="app">
        <slot-comp>
            <template v-slot:header>
                <h1>슬롯이 정상적으로 적용되면 이게 나오겠져?</h1>
            </template>
            
            <h2>이건 어디서 어떻게 사용하는지?</h2>

            <template v-slot:footer>
                <h1>footer 정의</h1>
            </template>
        </slot-comp>
    </div> -->

    <!-- <div id="wrapper">
        <slot-comp v-for="i in foods">
            <img v-bind:src="i.url">
            <h3>{{ i.name }}</h3>
            <p>{{ i.desc }}</p>
        </slot-comp>
    </div> -->

    <!-- 
    슬롯의 규칙
    <slot-comp>
        이 영역은 자식 컴포넌트에 작업한 내용이 출력
    </slot-comp>
    <slot-comp>
        내용을 추가하면 이 영역의 내용을 쓸 수 있다.
    </slot-comp> 
    -->

    <h1>동적 컴포넌트 예시</h1>
    <button @click="toggleValue= !toggleValue">컴포넌트 스위치</button>
    <component :is="activeComp"></component>
</template>
  
<script>
    // 컴포넌트 지역화
    // 원하는 컴포넌트에 선언함으로써 지역화를 진행
    // import CompOne from './components/CompOne.vue'

    // export default {
    //     components: {
    //         'comp-one': CompOne
    //     }
    // }
    

    // import SlotComp from './components/SlotComp.vue';
    // export default {
    //     data() {
    //         return {
    //             foods: [
    //                 { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: './src/assets/img_apple.svg'},
    //                 { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: './src/assets/img_pizza.svg'},
    //                 { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: './src/assets/img_rice.svg'},
    //                 { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: './src/assets/img_fish.svg'},
    //                 { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: './src/assets/img_cake.svg'}
    //             ]
    //         }
    //     }
    // }
    

    // 동적 컴포넌트 예시
    export default {
        data() {
            return {
                toggleValue: true
            }
        },
        computed: {
            activeComp() {

                if(this.toggleValue) {
                    return 'comp-one'
                } else {
                    return 'comp-two'
                }
            }
        }
    }
</script>
  
<style>
    /* p {
        width: 200px;
    }

    #app div {
        border: dashed black 1px;
        margin: 10px;
        padding: 10px;
        display: inline-block;
    }

    .compOneDiv {
        background-color: lightgreen;
    }

    .compTwoDiv {
        background-color: lightcoral;
    } */

    /*
    #wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    #wrapper img {
        display: block; 
        margin: auto; 
        width: 60%;
    }
    */

    div {
        width: 300px;
        margin: 15px;
        padding: 15px;
        border: 3px solid #000;
    }
</style>