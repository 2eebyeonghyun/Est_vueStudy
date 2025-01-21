<template>
    <h1>컴포넌트 입니다.( beforeMount)</h1>
</template>

<script>
    export default {
        // 육안상이나 체감상으로 beforeMount와 mounted의 차이를 느끼기가 어렵다.
        // DOM에 조작이 필요하냐 불필요하냐를 아는것 또한 개발자이기 때문에
        // 최대한 차이점을 정확히 구분해서 쓰는것이 더욱 좋다.
        mounted() {
            alert('컴포넌트 마운트 완료');
        }
    }
</script>