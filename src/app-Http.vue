<!-- <template>

    <div>
        <button @click="fetchData">Fetch Data</button>
        <p v-if="data">{{ data }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: null,
            }
        },
        methods: {
            async fetchData() {
                const response = await fetch('http://jsonplaceholder.typicode.com/posts');
                // fetch는 기본적으로 promise 기반의 메서드이기 때문에
                // 리턴타입 또한 프로미스타입
                // fetch() 메서드가 제공하는 첫번째 리턴은
                // Http 요청이 전송되었음을 의미하는 객체일뿐
                // 즉, 요청만 받아온 경우는 보류상태
                // this.data = await response.text();
                this.data = await response.json();
            }
        }
    }
</script> -->

<!-- Axios 예시 -->
<!-- <template>
    <div class="posts">
        <h2>게시물 목록</h2>
        <div v-if="loading">로딩중...</div>
        <div v-else-if="error">{{ error }}</div>
        <ul v-else>
            <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                posts: [],
                loading: false,
                error: null
            }
        },
        async created() {
            try {
                this.loading = true;
                const res = await axios.get('http://jsonplaceholder.typicode.com/posts');
                this.posts = res.data;
            } catch (error) {
                this.error = '데이터를 불러오는데 실패함';
            } finally {
                this.loading = false;
            }
        }
    }
</script> -->

<template>
    <h1>Example</h1>
    <p>Click the button to fetch data with an HTTP request.</p>
    <p>Each click generates an object with a random user from <a href="https://random-data-api.com/" target="_blank">https://random-data-api.com/</a>.</p>
    <p>The robot avatars are lovingly delivered by <a href="http://robohash.org/" target="_blank">RoboHash</a>.</p>
    
    <button @click="fetchData">Fetch data</button>

    <div v-if="data" id="dataDiv">
        <img :src="data.data.avatar" alt="avatar">
        <pre>{{ data.data.first_name + " " + data.data.last_name }}</pre>
        <p>"{{ data.data.employment.title }}"</p>
    </div>
</template>
  
<script>
    import axios from 'axios'
  
    export default {
        data() {
            return {
                data: null,
            };
        },
        methods: {
            async fetchData() {
                this.data = await axios.get("https://random-data-api.com/api/v2/users");
            }
        }
    };
</script>
  
<style>
    #dataDiv {
        width: 240px;
        background-color: aquamarine;
        border: solid black 1px;
        margin-top: 10px;
        padding: 10px;
    }

    #dataDiv > img {
        width: 100%;
    }

    pre {
        font-size: larger;
        font-weight: bold;
    }
</style>

