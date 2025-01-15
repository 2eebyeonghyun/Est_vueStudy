<!-- 
    머리 몸통 다리로 구분하듯이
    template script style로 둘 것
-->

<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '사과',
                message: '사과가 좋습니다.'
            }
        }
    };
</script>

<style></style>