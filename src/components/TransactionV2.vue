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
    import { ref } from 'vue'
    export default{

        //Lấy dữ liệu các kiểu sẽ lấy ở setup (Composition API) thay vì (created ở Option API)
        setup(){
            //ở đây mình nên dùng ref vì mình gián cả mảng rỗng bằng mảng mới 
            //Nếu mà sử dụng reactive thì chỉ thay thế của từng thành phần trong thôi nếu làm sẽ bất tiện và khó hơn rất nhiều
            const listData = ref([]);
            const error = ref(null);
            
            //Sử dung async để bất đồng bộ trong js 
            const getData = async () =>{
            try {
                const run = await fetch("http://localhost:3000/listdata");
                // console.log( run );

                //Nếu mà đường dẫn sai thì vào nó sẽ vào throw new Error....
                if( !run.ok) throw new Error("Something went wrong");


                const respone = await run.json();
                // console.log( respone);
                
                //Phải .value vì nó thuộc kiểu ref nhá 
                listData.value = respone;

                // hoặc viết kiểu này luôn
                // listData.value = await run.json();
            } catch (err) {
                //Nếu lỗi thì nó sẽ chạy xuống đấy nha
                error.value = err;
                console.log( error.value); 
            }
               

            }
            getData();

            return{
                listData, error,getData
            }

        }
    }
</script>
<style scoped>
    .error{
        color: red;
        background-color: azure;
    }
</style>