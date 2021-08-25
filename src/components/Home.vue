<template>
    <h1>Đây là Component Home</h1>
    <h2>Test về composion API ( ref và reactive )</h2>
    - namefriend:<span class="hoa"> {{namefriend}} </span>
    - sister: <span class="hoa"> {{sister}} </span><br><br>

    - nameTeacher <span class="hoa"> {{nameTeacher}} </span>

    <h4><button @click="onChange()">Click</button></h4>
</template>

<script>
    import { ref, reactive } from 'vue'
    export default {

        //setup muốn sử dụng trên kia thì cần 
        //  - return trả về cái giá trị ấy 
        //  - cần sử dụng ref hoặc reactive để chuyển móc nối lên dữ liệu bên trên template
        setup() {

            // Kiểu ref thì console ở trong script thì nó trả về đối tượng RefImpl gồm nhiều thuộc tính
            //Và có cặp set, get của từng cái 1, muốn truy cập để thay đổi cho đối tượng, hoặc giá trị nguyên thủy,
            // hoặc mảng thì cần phải truy cập đến giá trị của nó là (.value ) thì mới được nhá 
            //Nên nó được khuyên dùng trong giá trị nguyên thủy: string, boolean, number nhá 
            let namefriend = ref("Phạm Lan");
            let sister = ref({
                name: "Nguyễn Ngọc",
                age: 10
            });

            //Khi để dữ liệu nguyên thủy của reactive thì nó sẽ gây ra cảnh báo 
            //=> dữ liệu nguyên thủy không được sử dụng trong reactive,
            // XXXXXXXXXXXXXXXXX không được sử dụng như này nhá 
            // let nameTeacher = reactive("sfsf");
            // let nameTeacher = reactive(10);


            // reactive thì được dùng trong Object, Array nhá ;
            // Ví dụ
            const nameHaha = reactive(["hoa", 0, true, "xinh gái "]);
            let nameTeacher = reactive({
                id: "NV10",
                fullName: "Nguyễn Trung Quân",
                age: 20
            });
            //Cần phải chú ý nhá reactive chỉ có bộ set, get ở trong từng thành phần của .value thôi
            // Chứ không có bộ set, get của cả một đối tượng nên khi thay đổi cả đối tượng bằng 1 đối tượng khác thì
            //  không được nhá nó sẽ không thay đổi ở giá trị ở bên (template) khi console thì nó lại thay đổi ở trong (console.log) thôi nhá cần chú ý cái này






            function onChange() {
                console.log(namefriend);
                console.log(sister.value.name);
                console.log("nameHaHa - ", nameHaha);

                //Cái này cho minh chứng là chỉ thay đổi trong console chứ không thay đổi ở trong template
                //Nếu muốn set lại thì cần phải truy cập đến từng phần tử mới được nhá 
                // console.log("nameTeacher - ", nameTeacher);
                // Nên không được viết như này nhá 
                // nameTeacher = reactive({
                //     id: "NV233",
                //     fullName: "Nguyễn Trung Quân Ngọc",
                //     age: 40
                // });
                // console.log("nameTeacher  sau- ", nameTeacher);

                //Phải set từng thuộc tính của đối tượng như này mới được nhá 
                nameTeacher.id = "NV4000";


                // Viết như này là sai nó sẽ hiểu là namefriend sẽ gán lại bằng kiểu "string" nguyên thủy thay vì ref("")
                // Và nó sẽ không thay đổi giá trị ở trong template => Chúng ta đã sai 
                // namefriend= "Phạm Ngọc Lan";

                // Phải viết như này mới đúng
                namefriend.value = "Phạm Ngọc Lan";
                console.log("namefriend sau - ", namefriend);

                sister.value = {
                    name: "Lê Huyền",
                    age: 35
                }
                console.log("sister sau-", sister);


            }

            //Cần phải return thì mới được sử dụng trên template
            return {
                namefriend, sister, onChange, nameTeacher, nameHaha
            }
        }
    }
</script>

<style>
    .hoa {
        color: red;
    }
</style>