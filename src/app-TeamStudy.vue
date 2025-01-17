<template>
    <div class="blog-app">
        <div class="post-form">
            <input v-model="newPost.title" id="postTitle" placeholder="제목" />
            <textarea v-model="newPost.body" id="postBody" placeholder="내용"></textarea>
            <button @click="createPost" id="createPostBtn">게시물 작성</button>
        </div>

        <div v-if="loading" id="loadingIndicator">로딩 중...</div>
        <div v-else-if="error" id="errorMessage">{{ error }}</div>
        <div v-else id="postsList">
            <div v-for="post in posts" :key="post.id">
                <h3 class="post-title">{{ post.title }}</h3>
                <p class="post-body">{{ post.body }}</p>
                <button class="edit-btn" @click="editPost(post)">수정</button>
                <button class="delete-btn" @click="deletePost(post.id)">삭제</button>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {

    }
</script>

  <style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
}

.blog-app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.post-form {
    background: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-form input,
.post-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.post-form textarea {
    height: 100px;
    resize: vertical;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

.post-item {
    background: white;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-title {
    color: #333;
    margin-bottom: 10px;
}

.post-body {
    color: #666;
    margin-bottom: 15px;
}

.post-actions {
    display: flex;
    gap: 10px;
}

.edit-btn {
    background-color: #2196F3;
}

.edit-btn:hover {
    background-color: #1976D2;
}

.delete-btn {
    background-color: #f44336;
}

.delete-btn:hover {
    background-color: #d32f2f;
}

.loading {
    text-align: center;
    padding: 20px;
    background: #e3f2fd;
    border-radius: 4px;
    margin-bottom: 10px;
}

.error {
    color: white;
    background: #f44336;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
}

.hidden {
    display: none;
}
  </style>
  