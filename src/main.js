// import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import App from './app.vue' // app-todoList 컴포넌트 인식
// import itemList from './components/itemList.vue' // itemList 정보 가져오기
// import PropsExam from './components/PropsExam.vue'
// import SlotComp from './components/SlotComp.vue'
// import App from './app-Quiz.vue';
// import App from './app-Teleport.vue';
// import tel from './teleport/Tel.vue';
// import App from './app-Http.vue';
// import App from './app-TeamStudy.vue';

// import CompOne from './components/CompOne.vue'
// import CompTwo from './components/CompTwo.vue'

// import App from './app-LifeCycle.vue';
// import lifeCycle1 from './components/beforeCreate.vue';
// import lifeCycle2 from './components/beforeMount.vue';
// import lifeCycle3 from './components/beforeUpdate.vue';
// import lifeCycle4 from './components/beforeDelete.vue';
// import lifeCycle5 from './components/render.vue';

// import App from './app-routing.vue';
// import FoodItems from './route/FoodItems.vue'
// import Collections from './route/Collections.vue'
// import { createRouter, createWebHistory } from 'vue-router';

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {path: '/food', component: FoodItems},
//         {path: '/animals', component: Collections}
//     ]
// });

// import App from './app-animation.vue';
// import App from './app-animation2.vue';
import App from './app-animationGroup.vue';

const app = createApp(App)
// 실행하기전에 우선순위를 가져가는 효과
// 마운트하기전에 router의 정보를 전달한다.
// app.use(router);

// app.component('item-list', itemList);
// app.component('props-exam', PropsExam);
// app.component('comp-one', CompOne);
// app.component('comp-two', CompTwo);
// app.component('slot-comp', SlotComp);
// app.component('tel', tel);

// app.component('comp-one', lifeCycle1);
// app.component('comp-one', lifeCycle2);
// app.component('comp-one', lifeCycle3);
// app.component('comp-one', lifeCycle4);
// app.component('comp-one', lifeCycle5);


app.mount('#app');