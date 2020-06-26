import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        theme: false
    },
    getters: {
        getTheme(state){
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
