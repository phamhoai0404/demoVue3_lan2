<template>
    <h1>Đây là Transaction</h1>
    <div v-for =" item in listData" :key="item.id" style="padding: 20px;">

        <!-- nếu muốn đến name = transaction-detail-router thì cần bắt buộc phải có , params: { idddd: item.id  }  vì trong router mình đã ghi param -->
        <router-link :to="{name: 'transaction-detail-router', params: { idddd: item.id  } }">id là : {{ item.id}},&nbsp;&nbsp;</router-link> &nbsp; &nbsp; 
        tên là: {{ item.name}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listData: [
                    { id: 1, name:"Phạm Lan"},
                    { id: 2, name:"Phạm Ngọc"},
                    { id: 3, name:"Nguyễn Lan"},
                    { id: 4, name:"Lê Lan"},
                    { id: 5, name:"Hoa Hoa"},
                    { id: 6, name:"Phạm Lan"}
                ]
            }
        },
    }
</script>