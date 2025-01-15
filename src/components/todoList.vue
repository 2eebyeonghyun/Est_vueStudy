<template>
    
</template>

<script>
    import {ref, computed} from 'vue'

    export default {
        name: 'TodoList',
        setup() {
            // 상태 정의
            const todos = ref([]); // 할 일의 목록 배열
            const newTodo = ref([]); // 새로운 할 일 입력값
            const currentFilter = ref('전체'); // 현재 선택된 필터
            const filters = ['전체', '진행중', '완료']; // 필터 옵션

            // 할 일 추가 메서드
            // 바닐라JS 쓰듯이 처리
            const addTodo = () => {
                if(newTodo.value.trim()) { // .trim() => 입력값이 비어있는지 확인하는 메서드
                    todos.value.push({
                        id: Date.now(), // 현재 시간
                        text: newTodo.value, // 입력된 할 일
                        completed: false // 초기 완료상태는 false
                    })

                    newTodo.value = '' // 입력창 초기화
                }

                const removeTodo = (id) => {
                    todos.value = todos.value.filter(todo => todo.id !==id)
                    // -> 선택된 id를 제외한 새 배열 생성
                }

                // 필터링된 할 일 목록
                const filteredTodos = computed(() => {
                    switch(currentFilter.value) {
                        case '진행중':
                            return todos.value.filter(todo => !todo.completed);
                        case '완료':
                            return todos.value.filter(todo => !todo.completed);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .todo-container {
        padding: 20px;
    }

    .input-group {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .todo-input {
        flex: 1;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
    }

    .add-btn {
        padding: 8px 16px;
        background-color: #42b983;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .filter-group {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    .filter-btn {
        padding: 6px 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: white;
        cursor: pointer;
    }

    .filter-btn.active {
        background-color: #42b983;
        color: white;
        border-color: #42b983;
    }

    .todo-list {
        list-style: none;
        padding: 0;
    }

    .todo-item {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }

    .todo-checkbox {
        margin-right: 10px;
    }

    .todo-text {
        flex: 1;
    }

    .completed .todo-text {
        text-decoration: line-through;
        color: #999;
    }

    .delete-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 14px;
    }

    .todo-stats {
        margin-top: 20px;
        color: #666;
        font-size: 14px;
    }
</style>