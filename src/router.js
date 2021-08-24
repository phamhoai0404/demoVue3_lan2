import { createRouter, createWebHistory } from 'vue-router'
import Form from './components/Form.vue'
import About from './components/About.vue'
import Transaction from './components/Transaction.vue'
import TransactionDetail from './components/TransactionDetail.vue'

const routersssssss = [

    { path: '/', component: Form },

    { path: '/about', component: About },

    { path: '/transaction', component: Transaction },
    { path: '/transaction/:idddd', component: TransactionDetail },
]
const routerdddddd = createRouter({
    history: createWebHistory(),//Cái này là không hiện dấu thăng #
    routes: routersssssss, // nếu mà routersssssss ở trên kia viết bằng routes thì có thể viết tắt ở dòng này là    routers,
})

export default routerdddddd;