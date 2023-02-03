<template>
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" 
    aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Arriving Method</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" @submit.prevent="">
                        <div class="form-group">
                            <label class="float-start py-1" style="float: left">AccountId</label>
                            <input class="form-control" id="accountId" type="number" v-model="methodData.accountId" />
                            
                        </div>
                        <div class="form-group">
                            <label class="float-start py-1">arrivingArabicName</label>
                            <input class="form-control" type="text" v-model="methodData.arrivingArabicName" />
                        </div>
                        
                        <div class="form-group">
                            <label class="float-start py-1">arrivingEnglishName</label>
                            <input class="form-control" type="text" v-model="methodData.arrivingEnglishName" />
                        </div>
                        
                        <div class="form-group">
                            <label class="float-start py-1">Sort</label>
                            <input class="form-control" type="number" v-model="methodData.sort" />
                        </div>
                        
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateData">Save changes</button>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import store from '@/store';
import Swal from 'sweetalert2'
export default {
    name: "editModal",
    setup(props) {
        let form = {
            id: null,
            accountId: 1,
            sort: null,
            arrivingEnglishName: "",
            arrivingArabicName: ""
        };
        let updateData = ()=>{
            console.log("methodData",props.methodData);
            form.id = props.methodData.id
            form.accountId = props.methodData.accountId
            form.sort = props.methodData.sort
            form.arrivingArabicName = props.methodData.arrivingArabicName
            form.arrivingEnglishName = props.methodData.arrivingEnglishName
            store.dispatch("updateMethod",form).then((res)=>{
                $(document).ready(function(){
                    $("#editModal").modal("hide");
                });
                Swal.fire(
                    'Updated Successfully',
                    'Your Method has been updated.',
                    'success'
                )
            }).catch((error)=>{
                console.error(error)
                Swal.fire({
                    text: error.englishMessage,
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Try again!",
                    customClass: {
                    confirmButton: "btn fw-bold btn-light-danger",
                    },
                });
            })
            console.log("form",form);
        }

        return {
            form,
            updateData
        }
    },
    props: {
        methodData : {
            type: Object,
            required: false
        }
    },
    
    
}
</script>

<style>

</style>