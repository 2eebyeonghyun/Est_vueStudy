<template>
    <div>
        <button @click="showModal('AlertModal', { message: '안녕하세요!' })">알림 모달</button>
        <button @click="showModal('ConfirmModal', { message: '저장하시겠습니까?' })">확인 모달</button>
        <button @click="showModal('InputModal', { title: '사용자 입력' })">확인 모달</button>


        <!-- 
            transition : 우리가 알고있는 트랜지션
            name에 modal을 주게되면 Vue가 이 이름을 기반으로
            /* 진입 애니메이션 */
            .modal-enter-active  /* 진입 중 */
            .modal-enter-from   /* 진입 시작 상태 */
            .modal-enter-to     /* 진입 종료 상태 */

            /* 퇴장 애니메이션 */
            .modal-leave-active  /* 퇴장 중 */
            .modal-leave-from   /* 퇴장 시작 상태 */
            .modal-leave-to     /* 퇴장 종료 상태 */

            생성해버린다.
        -->
        <transition name="modal">
            <component
                v-if="currentModal"
                :is="currentModal"
                v-bind="modalProps"
                @close="closeModal"
                @confirm="handleConfirm"
            ></component>
        </transition>
    </div>
</template>

<script>
    import AlertModal from './quiz1compo/AlertModal.vue';
    import ConfirmModal from './quiz1compo/ConfirmModal.vue';
    import InputModal from './quiz1compo/InputModal.vue';

    export default {
        components: {
            AlertModal,
            ConfirmModal,
            InputModal
        },
        data() {
            return {
                currentModal: null,
                modalProps: {}
            }
        },
        methods: {
            showModal(type, props = {}) {
                this.currentModal = type
                this.modalProps = props
            },
            closeModal() {
                this.currentModal = null
                this.modalProps = {}
            },
            handleConfirm(data) {
                // 여기서는 확인 눌렀을 때 다른 이벤트를 수행하는것 또한 가능
                console.log('확인 눌렀나?', data);
                this.closeModal();
            }
        }
    }
</script>

<style>
    button {
        margin: 0.5rem;
    }

    .modal-enter-active, .modal-leave-active {
        transition: opacity 0.3s;
    }

    .modal-enter, .modal-leave-to {
        opacity: 0;
    }
</style>