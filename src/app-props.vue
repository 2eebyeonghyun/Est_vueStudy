<template>
    <h1>Food</h1>
    <div class="wrapper">
        <props-exam 
        v-for="i in foods"
        :key="i.name"
        :food-name="i.name"
        :food-desc="i.desc"
        :is-favorite="i.favorite"
        @toggle-favorite="receiveEmit"
        />
    </div>

    <!--
    아래와 같은 방식으로 웹 서비스를 제공하는 것은
    서비스 유지보수시 매우 힘들다.
    데이터를 좀 더 쉽고 빠르게 그리고 개발자가 손을 덜 쓰는쪽으로
    방향을 수정할 필요가 있다.
    <div class="wrapper">
        <props-exam 
        food-name="Apples"
        food-desc="사과는 사과 나무에서 자랍니다."
        v-bind:is-favorite="true"
        />
        <props-exam 
        food-name="Banana"
        food-desc="바나나는 바나나 나무에서 자랍니다."
        v-bind:is-favorite="true"
        />
        <props-exam 
        food-name="Mango"
        v-bind:is-favorite="false"
        />
        <props-exam 
        food-name="Pizza"
        food-desc="피자는 화로에서 자랍니다."
        v-bind:is-favorite="false"
        />
    </div>
    -->
</template>

<script>
    export default {
        data() {
            return {
                foods: [
                    {
                        name: '사과', 
                        desc: '사과는 사과 나무에서 열려요',
                        favorite: true
                    },
                    {
                        name: '바나나', 
                        desc: '바나나는 바나나 나무에서 열려요',
                        favorite: true
                    },
                    {
                        name: '고구마', 
                        desc: '고구마는 밭에서 자라요',
                        favorite: false
                    },
                    {
                        name: '피자', 
                        desc: '피자는 화로에서 구워요',
                        favorite: true
                    }
                ]
            }
        },
        methods: {
            // emit을 활용할 경우
            // 자식컴포넌트에는 같은 메서드를
            // 만들이유가 없기 때문에 재사용성 상승의
            // 효과를 누릴 수 있다.
            receiveEmit(foodname) {
                alert('선택한 항목 : ' + foodname);
            }
        }
    }
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