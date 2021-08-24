<template>
    <h1>Đây là Component Form</h1>
    <form @submit.prevent="onSubmit()">
        <div>FullName: </div>
        <input type="text" v-model="student.fullname" :class="{error: errorName.status}">
        <span v-if="errorName.status" class="errorName">{{errorName.text}}</span>
        <br>

        <div>Age: </div>
        <input type="text" v-model="student.age">
        <br>

        <!-- checkbox với radio cũng kiểu như vậy -->
        <!--  class = selecteddd  được chạy khi nó được chứa trong student.friends.includes là đúng -->
        <div v-for="name in names" :key="name.id" :class="{selecteddd: student.friends.includes(name.id)}">
            <input type="checkbox" :value="name.id" v-model="student.friends" />
            <label>{{name.full}}</label>
        </div>

        <!-- Đây là của selected nha -->
        <select v-model="student.bestFriend">
            <option value = null >--Chọn--</option>
            <option v-for="name in names" :key="name.id" :value="name.id">
                {{ name.full }}
            </option>
        </select>


        <!-- Cần phải chú ý cái này  -->
        <!-- Viết kiểu type = submit thì nó giống thực hiện y là @submit.prevent="onSubmit()" -->
        <button type="submit">Submit </button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                student: {
                    fullname: "",
                    tuoi: null,
                    friends: [],
                    bestFriend: null,
                },
                errorName: {
                    status: false,
                    text: "Lỗi nhá ",
                },
                errorAge: {
                    status: false,
                    text: "Lỗi nhá ",
                },
                names: [
                    { id: 1, full: "John" },
                    { id: 2, full: "Suka" },
                    { id: 3, full: "Doremon" },
                    { id: 4, full: "Nobita" },
                    { id: 5, full: "Chaien" },
                ]
            }
        },
        methods: {
            onSubmit() {
                console.log("vào đây", this.student);

                //Đây chỉ là test thử của tên thôi còn test nhiều trường hợp của fullname nữa thì để sau
                if (this.student.fullname > 100 || this.student.fullname < 4) {
                    this.errorName = {
                        status: true,
                        text: "Độ dài phải thuộc từ 4-100",
                    }
                }
            }
        },
    }
</script>
<style>
    .error {
        border: 1px solid red;
    }

    .errorName {
        color: red;
    }

    .selecteddd {
        border: 1px solid green;
        background-color: aqua;
        padding: 2px !important;
    }
</style>