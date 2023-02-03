<template>
  <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Arriving Method</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                  <label class="float-start py-1" style="float: left">AccountId</label>
                  <input class="form-control" type="number" required v-model="form.accountId" />
              </div>
              <div class="form-group">
                  <label class="float-start py-1">arrivingArabicName</label>
                  <input class="form-control" type="text" required v-model="form.arrivingArabicName" />
              </div>
              
              <div class="form-group">
                  <label class="float-start py-1">arrivingEnglishName</label>
                  <input class="form-control" type="text" required v-model="form.arrivingEnglishName" />
              </div>
              
              <div class="form-group">
                  <label class="float-start py-1">Sort</label>
                  <input class="form-control" type="number" required v-model="form.sort" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="save">Save changes</button>
          </div>
        </div>
      </div>
    </div> 

</template>
<script>
import Swal from 'sweetalert2'
import store from '@/store';
import { reactive } from '@vue/reactivity';
export default {
    name: "addModal",
    setup(){
      let form = reactive({
        accountId: 1,
        sort: null,
        arrivingEnglishName: "",
        arrivingArabicName: ""
      })

      let save = ()=> {
          store.dispatch("addMethod",form).then((res)=>{
          $(document).ready(function(){
              $("#addModal").modal("hide");
          });
          form.accountId = 1;
          form.sort = null;
          form.arrivingArabicName = "";
          form.arrivingEnglishName= "";
          Swal.fire(
              'Added Successfully',
              'Your Method has been Added.',
              'success'
          )
        }).catch((error)=>{
          console.error(error)
          Swal.fire({
            title: error.englishMessage,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Try again!",
            customClass: {
              confirmButton: "btn fw-bold btn-light-danger",
            },
          });
        })
      }

      return {
        form,
        save
      }
    },
    
}
</script>

<style>

</style>