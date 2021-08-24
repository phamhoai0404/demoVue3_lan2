<template>
    <div>
        <h1> Đây là Transaction Detials</h1>

        <!-- Nhớ nhớ tên mặc định nó là như thế này đấy  cái to nhất là cái này -->
        <!-- <h2>{{$route}}</h2> -->

        <!--tại sao lại biết những cái này có trong $route mà gọi ra  .params.idddd thì
                -đầu tiên thì cần cho cái $route vào json rồi nhìn thấy thôi
                
        -->
        <h2>id là: {{ $route.params.idddd}}</h2>
        <div v-if="object">
            id là : {{object.id}},&nbsp;&nbsp; &nbsp; &nbsp;
            tên là: {{ object.name}}
        </div>
        <div v-else>
            Đang loading id:  {{ $route.params.idddd}} ....
        </div>



    </div>
</template>

<script>
    export default {
        data() {
            return {
                object: null
            }
        },

        created() {
            fetch("http://localhost:3000/listdata/" + this.$route.params.idddd)
                .then(respone => respone.json())
                .then(data => {
                    this.object = data;
                    console.log(data);
                });
        },

    }

</script>