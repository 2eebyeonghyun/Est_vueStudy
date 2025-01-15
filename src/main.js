// import './assets/main.css'

import { createApp } from 'vue'
import App from './app.vue' // app 컴포넌트 인식
// import itemList from './components/itemList.vue' // itemList 정보 가져오기

// createApp(App).mount('#app')
const app = createApp(App)
// app.component('item-list', itemList);
app.mount('#app');