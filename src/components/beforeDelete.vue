<template>
    <h1>컴포넌트 소환완료</h1>
</template>

<script>
    export default {
        unmounted() {
            alert('이 알람은 언제뜰까2222?');
        },
        beforeUnmount() {
            alert('이 알람은 언제뜰까?');
        }
    }
</script>