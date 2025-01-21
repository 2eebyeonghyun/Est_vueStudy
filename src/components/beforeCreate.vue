<template>
    <h2>Component</h2>
    <p>This is the component</p>
    <p id="pResult">{{ text }}</p>
</template>

<script>
    export default {
        data() {
            return {
                text: '...'
            }
        },
        
        // beforeCreate는 DOM요소들을 모두 불러오기전에 로딩이되서
        // text 프로퍼티에 값을 세팅하기가 불가능해진다.
        // 이유: 로딩도 안됐는데 text 프로퍼티를 찾아봐야 렌더링시에는 이미 그 내용을 적용할 수가 없다.
        // beforeCreate() {
        //     this.text = 'initial text';
        //     console.log("beforeCreate: The component is not created yet.");
        // }

        // created는 DOM요소들을 모두 렌더링후에 실행되는 메서드( 훅)이다 보니
        // text 프로퍼티에 값을 제대로 세팅하는것이 가능하다.
        created() {
            this.text = 'initial text';
            console.log("beforeCreate: The component is not created yet.");
        }

        // 이런식으로 구성하면 메서드 실행되자마자 주소를 바로 가져올수있다.
        // async created() {
        //     await fetch('주소');
        //     this.text = 'initial text';
        //     console.log("beforeCreate: The component is not created yet.");
        // }
    }
</script>