<template>
  <div class="home container">
    <div class="card p-4 justify-content-between flex-row mt-5">
      <h3>Arriving Methods</h3>
      <button 
        class="btn btn-primary" type="button" data-bs-toggle="modal"
         data-bs-target="#addModal">Add New</button>
    </div>
    <dataTable></dataTable>
    <addModal></addModal>
  </div>
</template>

<script>
import dataTable from '@/components/table-data.vue';
import addModal from '@/components/addModal.vue';
import store from '@/store';
export default {
  name: 'HomeView',
  components: {
    dataTable,
    addModal,
  },
  setup(){
    let itemsPerPage = 6;
    let currentPage = 0;
    let loadedData = store.dispatch("getData",  {
          page: currentPage,
          rows: itemsPerPage
        }
    )
    return{
      loadedData
    }
  },
  // {
  //   first: '0',
  //   page: '0',
  //   rows: pagination
  // }

  // created() {
  //   let dataTable = store.dispatch("getData",  {
  //         page: this.currentPage,
  //         rows: this.itemsPerPage
  //       }
  //   ).then((res)=> {
  //     console.log("responseeeeeeeeeeeee", res);
  //   });
  // },
}
</script>
