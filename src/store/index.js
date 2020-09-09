import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carList:[]
  },
  mutations: {
      addCart(state, info) {
      console.log(info);
      // 1.查看是否添加过
      const oldInfo = state.carList.find(item => item.iid === info.iid)

      // 2.+1或者新添加
      if (oldInfo) {
        oldInfo.count += 1
      } else {
        info.count = 1
        info.checked = true
        state.carList.push(info)
      }
    },
    checkItem(state,index){
        state.carList[index].checked=!state.carList[index].checked;
    },
    checkall(state,chioce){
        state.carList.forEach(item=>{
          item.checked=chioce;
        })
    }

  },
  actions: {
  },
  modules: {
  }
})
