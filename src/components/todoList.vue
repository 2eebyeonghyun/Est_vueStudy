<template>
    <div class="todo-container">
        <!-- 새로운 할 일 입력받기 -->
        <div class="input-group">
            <input type="text" class="todo-input" v-model="newTodo" @keyup.enter="addTodo" placeholder="할 일 입력">
            <button class="add-btn" @click="addTodo">추가</button>
        </div>

        <!-- 필터링 버튼 -->
        <div class="filter-group">
            <!-- filters의 내용을 반복으로 돌리고 임시변수 filter로 빼온다는 얘기 -->
            <!-- 클릭을 했을 때 현재 변수에다가 임시변수를 가져온다 -->
            <!-- 
                아래의 버튼은 다음의 규칙으로 설계
                반복 키워드를 활용하여 filters 변수의 내용을 하나하나씩 반복
                    -> 추후 기능 추가시 건드릴게 적다.
                :key="filter" // Vue의 리스트 렌더링을 위한 고유 키 부여
                클릭 시 현재의 필터값을 변경 후 클래스도 active를 추가
            -->
            <button 
                v-for="filter in filters" 
                :key="filter" 
                @click="currentFilter = filter" 
                :class="['filter-btn', { active: currentFilter === filter}]"
            >
                {{  filter }}
            </button>
        </div>

        <!-- 할 일 목록 -->
         <ul class="todo-list">
            <li
                v-for="todo in filteredTodos"
                :key="todo.id"
                :class="['todo-item', { completed: todo.completed }]"
            >
                <!-- 이 checkbox는 완료여부를 체크하는데 completed 속성과 양방향으로 바인딩을 체크 -->
                <input type="checkbox"
                    v-model="todo.completed"
                    class="todo-checkbox"
                >

                <!-- 할 일에 대한 텍스트 추가 -->
                <span class="todo-text">{{ todo.text }}</span>

                <button 
                    @click="removeTodo(todo.id)"
                    class="delete-btn"
                >
                    ❌
                </button>
            </li>
         </ul>

        <!-- 남은 할 일 개수 표시 -->
        <div class="todo-stats">
            남은 할 일: {{ remaininTodos }} 개  // 완료되지 않은 할 일 개수 표시
        </div>
    </div>
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
            }

            const removeTodo = (id) => {
                todos.value = todos.value.filter(todo => todo.id !==id)
                // -> 선택된 id를 제외한 새 배열 생성
            }

            // 필터링된 할 일 목록
            const filteredTodos = computed(() => {
                switch(currentFilter.value) {
                    case '진행중': // 미완료 목록만 view
                        return todos.value.filter(todo => !todo.completed);
                    case '완료': // 완료 목록만 view
                        return todos.value.filter(todo => todo.completed);
                    default:
                        return todos.value
                }
            });

            // 남은 할 일 개수 계산( 계산된 속성)
            const remaininTodos = computed(() => {
                return todos.value.filter(todo => !todo.completed).length
            });

            return {
                todos,
                newTodo,
                currentFilter,
                filters,
                addTodo,
                removeTodo,
                filteredTodos,
                remaininTodos
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