<!-- <template>
    <h1>Basic CSS</h1>
    <button @click="this.doesRotate = true">회전</button>
    <div :class="{rotate: doesRotate}"></div>
</template>

<script>
    export default {
        data() {
            return {
                doesRotate: false
            }
        }
    }
</script>

<style>
    .rotate {
        rotate: 160deg;
        transition: rotate 1s;
    }

    #app > div {
        border: solid black 2px;
        background-color: lightcoral;
        width: 60px;
        aspect-ratio: 1;
    }

    h1, button {
        margin: 10px;
    }
</style> -->


<!-- <template>
    <h1>Add/Remove &lt;p&gt; Tag</h1>
    <button @click="this.exists = !this.exists">{{btnText}}</button><br>
    <p v-if="exists">Hello World!</p>
</template>
  
<script>
    export default {
        data() {
            return {
                exists: false
            }
        },

        computed: {
            btnText() {
                if(this.exists) {
                    return 'Remove';
                } else {
                    return 'Add';
                }
            }
        }
    }
</script>
  
<style>
    p {
        opacity: 0;
        background-color: lightgreen;
        display: inline-block;
        padding: 10px;
    }
</style> -->

<template>
    <h1>Add/Remove &lt;p&gt; Tag</h1>
    <button @click="this.exists = !this.exists">{{btnText}}</button><br>
    <Transition>
        <p v-if="exists" id="p1">Hello World!</p>
    </Transition>

    <button @click="this.exists2 = !this.exists2">{{btnText2}}</button><br>
    <Transition name="test">
        <p v-if="exists2" id="p2">헬로헬로</p>
    </Transition>
</template>
  
<script>
    export default {
        data() {
            return {
                exists: false,
                exists2: false
            }
        },

        computed: {
            btnText() {
                if(this.exists) {
                    return 'Remove';
                } else {
                    return 'Add';
                }
            },
            btnText2() {
                if(this.exists2) {
                    return 'Remove';
                } else {
                    return 'Add';
                }
            }
        }
    }
</script>
  
<style>
    /* 애니메이션 속성 활용하기 */
    .v-enter-active {
        background-color: lightgreen;
        animation: added 1s;
    }

    .v-leave-active {
        background-color: crimson;
        animation: added 1s reverse;
    }

    @keyframes added {
        from {
            opacity: 0;
            translate: -100px 0;
        }

        to {
            opacity: 1;
            translate: 0 0;
        }
    }

    .test-enter-active {
        background-color: lightgreen;
        animation: added2 1s;
    }

    .test-leave-active {
        background-color: crimson;
        animation: added2 1s reverse;
    }

    @keyframes added2 {
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

    /* add 버튼 누를 때 실행되는 이벤트 */
    /* .v-enter-from {
        opacity: 0;
        translate: -100px 0;
    }

    .v-enter-to {
        opacity: 1;
        translate: 0 0;
    } */

    /* remove 버튼 누를 때 실행되는 이벤트 */
    /* .v-leave-from {
        opacity: 1;
        translate: 0 0;
    }

    .v-leave-to {
        opacity: 0;
        translate: 100px 0;
    } */

    /* p {
        background-color: lightgreen;
        display: inline-block;
        padding: 10px;
        transition: all .5s;
    } */

    #p1, #p2 {
        display: inline-block;
        padding: 10px;
        border: dashed black 1px;
    }

    #p2 {
        background-color: lightcoral;
    }
</style>