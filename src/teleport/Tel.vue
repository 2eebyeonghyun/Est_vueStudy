<template>
    
    <div>
        <h2>tel 컴포넌트</h2>
        <Teleport to="body">
            <div
                id="redDiv"
                @click="toggleVal = !toggleVal"
                :style="{ backgroundColor: bgColor }"
            >
                하이용!
            </div>
        </Teleport>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                toggleVal: true
            }
        },
        computed: {
            bgColor() {
                
                if(this.toggleVal) {
                    return 'lightpink'
                } else {
                    return 'lightgreen'
                }
            }
        }
    }
</script>

<style>
    #redDiv {
        margin: 10px;
        padding: 10px;
        display: inline-block;
    }

    #redDiv:hover {
        cursor: pointer;
    }
</style>