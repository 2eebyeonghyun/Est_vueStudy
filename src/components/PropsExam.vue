<template>
    <div>
        <h2>{{ foodName }}</h2>
        <img src="../assets/img_quality.svg" v-show="foodIsFavorite">
        <p>{{ foodDesc }}</p>
        <button v-on:click="toggleFavorite">Favorite</button>
    </div>
</template>

<script>
    export default {

        // props를 쓰는 다른 패턴
        // 아래와 같이 사용하는 경우는 사실 좀 복잡하다.
        props: [
            'foodName',
            'foodDesc',
            'isFavorite'
        ],
        data() {
            return {
                foodIsFavorite: this.isFavorite
            }
        },
        methods: {
            toggleFavorite() {
                this.$emit('toggle-favorite', this.foodName);
            }
        }

        // props는 단순하게 문자열로만 쓰는것은 아님
        //  -> 객체 타입등 다양한 방법으로 데이터를 받아온 후 처리 할 수 있다.
        /*
        props : {
            foodName: {
                type: String,
                required: true // 필수값 정의시 사용
            },
            foodDesc: {
                type: String,
                required: false,
                default: '아무것도 안젹혀서 기본값 적어둠',
                // props 검증 기능
                // 아래으 기능은 10자 이상 100자 이하의 데이터만 입력할 수 있도록 처리
                validator: function(value) {

                    if(value.length > 10 && value.length < 100) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false
            }
        }
        */
    };
</script>

<style>
    img {
        height: 1.5em;
        float: right;
    }
</style>