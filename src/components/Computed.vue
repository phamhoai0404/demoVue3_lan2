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
    <button @click="onChange()">Click</button>
</template>

<script>
    import { computed, ref, reactive, watchEffect, watch } from 'vue'
    export default {

        //cái này thì giống phiên bản trước thôi là lấy dữ liệu từ component cha sang ấy 
        props: {
            student: {
                type: String,
                required: false,//Đây là có hay không không quan trọng, nếu là false thì không cần viết cũng được
                default: "Phạm Phương Anh",
            }
        },


        // Bản chất là nó là như này 
        //Đối tượng đầu tiên mình đặt tên nó là gì đi nữa thì nó vẫn là props còn đối tượng thứ 2 là context
        // setup(props, context){
        //     console.log(props);//Nó kiểu trả về là đối tượng ấy 
        //     console.log( context);
        // }
        // Nên mà mình chỉ cần lấy như này trong props và context thôi 
        setup( propsssss, { emit }) {//cái tên {emit} hai cái này tên đặt là phải chuẩn ở trong props và context ấy nhớ không thể đặt linh tinh được
            console.log(propsssss.student);
            console.log(emit);
            const textArea = ref("");
            const listData = reactive(["Phạm Ngọc", "Nguyễn Lê", "Yên Lan", "Yến Nhi", "John Hang"]);

            //Sử dụng computed là khi thay đổi nó sẽ thay đổi tính toán theo nhá 
            const listfillData = computed(() => {
                let temp = textArea.value.toLowerCase().trim();
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

            // Theo như RHP Team nói thì khi có sự thay đổi thì nó sẽ thực hiện mà không trả về giá trị nhá
            watchEffect(() => {

                // kiểu textArea sẽ thay đổi mà theo từng lần mình kích ấy 
                if (textArea.value) {
                    console.log("Vào watchEffect ...");
                }
            });


            //watch (đơn giản ấy thì xem được sự  có sự thay đổi thì xẽ xem được) dữ liệu mới và dữ liệu cũ
            watch((textArea), (newItem, oldItem) => {
                console.log(" watch: ", newItem, oldItem);
            })

            function onChange() {
                // console.error(" hoa là: ", hoa);
            }
            return {
                textArea, listData, listfillData, listfillDatasss, onChange
            }
        }

    }
</script>