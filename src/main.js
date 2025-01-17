// import './assets/main.css'

import { createApp } from 'vue'
// import App from './app.vue' // app-todoList 컴포넌트 인식
// import itemList from './components/itemList.vue' // itemList 정보 가져오기
// import PropsExam from './components/PropsExam.vue'
// import SlotComp from './components/SlotComp.vue'
// import App from './app-Quiz.vue';
// import App from './app-Teleport.vue';
// import tel from './teleport/Tel.vue';
// import App from './app-Http.vue';
import App from './app-TeamStudy.vue';


// import CompOne from './components/CompOne.vue'
// import CompTwo from './components/CompTwo.vue'

const app = createApp(App)

// app.component('item-list', itemList);
// app.component('props-exam', PropsExam);
// app.component('comp-one', CompOne);
// app.component('comp-two', CompTwo);
// app.component('slot-comp', SlotComp);
// app.component('tel', tel);


app.mount('#app');