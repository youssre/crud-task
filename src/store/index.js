import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state: {
    arrivingMethods: [],
    totalCount: 0,
  },
  getters: {
    getArrivingMethods(state){
      return state.arrivingMethods;
    }
  },
  mutations: {
    SET_DATA(state, payload) {
      state.arrivingMethods = payload;
    },
    SET_TOTAL_COUNT(state, payload) {
      state.totalCount = payload;
    }
  },
  actions: {
    getData({commit},pagination ){
      const config = {
        method: 'get',
        url: 'http://40.127.194.127:777/api/Emergency/GetAllArrivingMethods',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjAwMDdjYWY1LWFjNjktNDViNi1hOTA1LWI1NjBlNTkxOWI4OSIsImV4cCI6MTY3NTQ0MzQ1MiwiaXNzIjoiQ2xpbml2aXNvciIsImF1ZCI6IkNsaW5pdmlzb3IifQ.BaTeMi1g1xI8oDPa7MnvIPNwrsvDS7Pm6M9BmT8N-zU',
        },
        params: pagination
      };
      axios.request(config)
        .then(response => {
          commit("SET_DATA", response.data.data);
          commit("SET_TOTAL_COUNT",response.data.totalCount)
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    addMethod({commit , state} ,payload){
      const config = {
        method: 'post',
        url: 'http://40.127.194.127:777/api/Emergency/AddOrUpdateArrivingMethod',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjAwMDdjYWY1LWFjNjktNDViNi1hOTA1LWI1NjBlNTkxOWI4OSIsImV4cCI6MTY3NTQ0MzQ1MiwiaXNzIjoiQ2xpbml2aXNvciIsImF1ZCI6IkNsaW5pdmlzb3IifQ.BaTeMi1g1xI8oDPa7MnvIPNwrsvDS7Pm6M9BmT8N-zU',
        },
        data: payload,
      };
      axios.request(config)
        .then(response => {

          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateMethod({commit} ,payload){
      const config = {
        method: 'post',
        url: 'http://40.127.194.127:777/api/Emergency/AddOrUpdateArrivingMethod',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjAwMDdjYWY1LWFjNjktNDViNi1hOTA1LWI1NjBlNTkxOWI4OSIsImV4cCI6MTY3NTQ0MzQ1MiwiaXNzIjoiQ2xpbml2aXNvciIsImF1ZCI6IkNsaW5pdmlzb3IifQ.BaTeMi1g1xI8oDPa7MnvIPNwrsvDS7Pm6M9BmT8N-zU',
        },
        data: payload,
      };
      axios.request(config)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },

    async deleteMethod({ commit,state }, id) {
        const config = {
          method: 'post',
          url: 'http://40.127.194.127:777/api/Emergency/DeleteArrivingMethod',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjAwMDdjYWY1LWFjNjktNDViNi1hOTA1LWI1NjBlNTkxOWI4OSIsImV4cCI6MTY3NTQ0MzQ1MiwiaXNzIjoiQ2xpbml2aXNvciIsImF1ZCI6IkNsaW5pdmlzb3IifQ.BaTeMi1g1xI8oDPa7MnvIPNwrsvDS7Pm6M9BmT8N-zU',
          },
          data: id,
        };
      await axios.request(config)
        .then(() => {
          commit('SET_DATA', state.arrivingMethods.filter(item => item.id !== id))
        }).catch(error => {
          console.error(error)
        })
    }
  },
  modules: {
  }
})

export default store;
