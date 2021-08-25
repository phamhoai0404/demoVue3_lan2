import { createRouter, createWebHistory } from 'vue-router'
import Form from './components/Form.vue'
import Home from './components/Home.vue'
import Computed from './components/Computed.vue'
import Transaction from './components/Transaction.vue'
import TransactionV2 from './components/TransactionV2.vue'
import TransactionDetail from './components/TransactionDetail.vue'
import NotFound from './components/NotFound.vue'

const routersssssss = [

    {
        path: '/form',
        name: 'form-router',
        component: Form
    },
    {
        path: '/',
        name: 'home-router',
        component: Home
    },

    {
        path: '/about',
        name: 'about-router',
        component: Computed
    },

    {
        path: '/transaction',
        name: 'transaction-router',
        component: Transaction
    },
    {
        path: '/transactionv2',
        name: 'transactionv2-router',
        component: TransactionV2
    },
    {
        path: '/transaction/:idddd',
        name: 'transaction-detail-router',
        component: TransactionDetail
    },
    {
        path: '/abt',//ví dụ khi người ta gọi tắt khi này thì nó sẽ dẫn tới đường dẫn của '/about'
        redirect:'/about',
    },
    //Nếu mà đường đẫn sai thì 
    // Cái này ở vue-router 4 cải tiến hơn đó vì khi nó ở đường dẫn con muốn dẫn đến cái nào đó thì ta có thể thay đổi nha
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]
const routerdddddd = createRouter({
    history: createWebHistory(),//Cái này là không hiện dấu thăng #
    routes: routersssssss, // nếu mà routersssssss ở trên kia viết bằng routes thì có thể viết tắt ở dòng này là    routers,
})

export default routerdddddd;