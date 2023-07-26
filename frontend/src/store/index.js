import { createStore } from 'vuex'

export default createStore({
    state: {
        selectedMachine: [],
    },
    getters: {},
    mutations: {
        SET_SELECTEDMACHINE(state, list) {
            state.selectedMachine = list;
        },
    },
    actions: {

    },
    modules: {}
})