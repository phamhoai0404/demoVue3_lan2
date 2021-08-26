<template>
    <h1>Transaction version 2</h1>
    <div v-if="listData.length >0">
        <div v-for=" item in listData" :key="item.id" style="padding: 20px;">
            <!-- nếu muốn đến name = transaction-detail-router thì cần bắt buộc phải có , params: { idddd: item.id  }  vì trong router mình đã ghi param -->
            <router-link :to="{name: 'transaction-detail-router', params: { idddd: item.id  } }">id là : {{
                item.id}},&nbsp;&nbsp;</router-link> &nbsp; &nbsp;
            tên là: {{ item.name}}
        </div>
    </div>
    <!-- error!= null viết như này cũng được để hiểu bản chất, ở dưới cũng kiểu thế mà kiểu như error tồn tại ấy  -->
    <div v-else-if="error" class="error"> {{error.message}} </div>
    <div v-else>
        loading data....
    </div>


</template>

<script>
    import useTransaction from '../reusable(compositionAPI)/fetchTransac.js'
    export default {
        setup() {
            //Mình sử dụng cái nào thì mình gọi ra cái đấy thôi nhá 
            //Những cái gọi tên ở đây listData,getData,.. thì phải chính xác tên ở trong file js export ấy 
            const { listData, getData,error } = useTransaction();

            //Phải sử lý function trước thì mới trả về được listData
            getData();

            // console.log('listData', listData);

            return {
                listData , error
            }
        }
    }
</script>
<style scoped>
    .error {
        color: red;
        background-color: azure;
    }
</style>