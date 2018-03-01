

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// const mutations = {
//     increment(state){
//        state.count++
//     },
//     decrement(state){
//         state.count--
//     }
// }

// const getters = {
//     evenOrOdd: function(){
//         return  state.count % 2 === 0 ? 'even' : 'odd'
//     }
// }

export const store = new Vuex.Store({
    state: {
        posts:[
            {name: 'fortune', sex: 'male', age: 20},
            {name: 'felicia', sex: 'female', age: 30}
        ]
    },
    getters:{
        ageDivider: state => {
            var ageDivider = state.posts.map(post => {
                return {
                    name: '**' + post.name + '**',
                    age: post.age / 2,
                    sex: post.sex
                }
                
            });
            return ageDivider;
        }  
    },
    mutations:{
        substratAge: (state, payload) => {
            state.posts.forEach(post => {
                post.age -= payload;
            });
        }
    },
    actions: {
        substratAge: (context, payload) => {
            setTimeout(function(){
                context.commit('substratAge', payload);
            }, 3000);
        }
    }

})