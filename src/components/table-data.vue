<template>
    <div class="card p-4 mt-2">
        <input class="form-control" placeholder="Filter by arrivingEnglishName" type="text" v-model="search">
        <div class="table-responsive">
            <table class="table table-striped table-hover w-100 hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">accountId</th>
                    <th scope="col">arrivingArabicName</th>
                    <th scope="col">arrivingEnglishName</th>
                    <th scope="col">sort</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in filteredData" :key="item.id">
                        <td>
                            <div>{{ item.id }}</div>
                        </td>
                        <td>
                            <div>{{ item.accountId }}</div>
                        </td>
                        <td>
                            <div>{{ item.arrivingArabicName }}</div>
                        </td>
                        <td>
                            <div>{{ item.arrivingEnglishName }}</div>
                        </td>
                        <td>
                            <div>{{ item.sort }}</div>
                        </td>
                        <td>
                            <div class="d-flex gap-4 justify-content-center">
                                <button class="btn btn-success" 
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                    @click="getDataId(item)">
                                    Edit
                                </button>
                                <button class="btn btn-danger" @click="deleteItem(item.id)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <edit-modal :methodData="itemData"></edit-modal>
        <div class="d-flex gap-4 justify-content-center mt-5">
            <!-- <div v-for="i in totalPages" :key="i">
                <button type="button" class="btn btn-primary"
                :disabled="!i" @click.prevent="getwithPag(i)">{{ i }}</button>
            </div> -->
            
            <button type="button" class="btn btn-primary"
             :disabled="page == 0 ?true : false" @click.prevent="prev">prev</button>
            <button type="button" :disabled="page < totalPages - 1  ? false : true"
             class="btn btn-primary" @click.prevent="next">next</button>
        </div>
    </div>
</template>

<script>
import editModal from './editModal.vue';
import Swal from 'sweetalert2'
import store from '@/store';
import { computed,  ref } from '@vue/runtime-core';
export default {
    components: {
        editModal
    },
    name: "dataTable",
    setup(){
        let arrivingData = computed(()=> store.getters.getArrivingMethods)
        let search = ref("") ;
        let itemData =  ref({});
        let filteredData = computed(()=>{
             return arrivingData.value.filter(item => {
                return item.arrivingEnglishName.toLowerCase().includes(search.value.toLowerCase());
             })          
        });
        let getDataId = (objectData)=> {
            itemData.value = objectData
            console.log("itemData",itemData.value)
        }
        let deleteItem = (item)=> {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                     store.dispatch('deleteMethod', item).then((res)=>{
                        console.log("res",res);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }).catch((error)=>{
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
                    
                }
            })
        }
        let page = ref(0);
        let rows= 6;
        let next = ()=> {
            store.dispatch("getData", {
                page: page.value+=1,
                rows,
            })
        }
        let prev = ()=> {
            store.dispatch("getData",  {
                page: page.value-=1 ,
                rows
            })
        }
        let total= computed(()=> {
            return store.state.totalCount;
        })

        let totalPages = computed(()=> {
            return Math.ceil(total.value / rows);
        })

        return{
            arrivingData,
            search,
            itemData,
            getDataId,
            deleteItem,
            filteredData,
            next,
            prev,
            total,
            totalPages,
            page,
            rows,
        
            //handlePageChange
        }
    },
    
}
</script>

<style>

</style>