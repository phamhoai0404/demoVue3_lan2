<template>
    <h1>Đây là Transaction</h1>
    <div v-if="listData">
        <div v-for=" item in listData" :key="item.id" style="padding: 20px;">
            <!-- nếu muốn đến name = transaction-detail-router thì cần bắt buộc phải có , params: { idddd: item.id  }  vì trong router mình đã ghi param -->
            <router-link :to="{name: 'transaction-detail-router', params: { idddd: item.id  } }">id là : {{
                item.id}},&nbsp;&nbsp;</router-link> &nbsp; &nbsp;
            tên là: {{ item.name}}
        </div>
    </div>
    <div v-else>
        loading data....
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listData: null,
            }
        },
        //created rồi đến mousted nhớ nhé, created nó hoạt động trước rồi mới đến mousted load DOM nhá 
        created() {
            fetch("http://localhost:3000/listdata")
                .then(response => response.json())//Chuyển về dạng json vì trong document của nó bảo thế nhá 
                .then(data => {
                    console.log(data);
                    this.listData = data;
                });
        }
    }
</script>