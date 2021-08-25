<template>
    <h1>About and Computed</h1>
    <br><br>
    <h2>Dữ liệu ban đầu: </h2>
    <ul>
        <li v-for="(item, index) in listData" :key="index"> {{ item }}</li>
    </ul>
    <br><br>
    Lọc <input type="text" v-model="textArea">{{textArea}}
    <h2>Dữ liệu sau khi lọc: </h2>
    <ul>
        <li v-for="(item, x) in listfillData" :key="x"> {{ item }}</li>
    </ul>
</template>

<script>
    import { computed, ref, reactive } from 'vue'
    export default {
        setup() {
            const textArea = ref("");
            const listData = reactive(["Phạm Ngọc", "Nguyễn Lê", "Yên Lan", "Yến Nhi", "John Hang"]);

            //Sử dụng computed là khi thay đổi nó sẽ thay đổi tính toán theo nhá 
            const listfillData = computed(() =>{ 
                let temp = textArea.value.toLowerCase();
                console.log(" temp - ", temp);

                // Nếu là  anofuntion chỉ có 1 câu lệnh thì không cần return ở trước listData.. cũng được
                //Nhưng ở đây có nhiều câu lệnh nên là cần có return ở trước listData
                return listData.map(item => {
                    item = item.toLowerCase();
                    return item;
                }).filter(it => it.includes(temp));
            });


            // Đây là kiểu anofuntion nhá vì có 1 câu lệnh nên không cần có return nha
            let listfillDatasss = computed(() => 
                listData.map(item => {
                    item = item.toLowerCase();
                    return item;
                }).filter(it => it.includes(textArea.value.toLowerCase()))
            );

            return {
                textArea, listData, listfillData, listfillDatasss
            }
        }
    
    }
</script>