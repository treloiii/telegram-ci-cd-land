import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        theme: true
    },
    getters: {
        getTheme(state){
            if(state.theme)
                return "dark"
            else
                return "light"
        },
        inverse(state){
            if(state.theme)
                return "light"
            else
                return "dark"
        }
    },
    mutations:{
        changeTheme(state){
            state.theme=!state.theme
        }
    }
})
