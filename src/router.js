import{ createRouter , createWebHistory } from 'vue-router';
import ContactHotel from './Hotel/ContactHotel.vue';
import HotelDetail from './Hotel/HotelDetail.vue';
import HotelList from './Hotel/HotelList.vue';
import HotelRegistration from './Hotel/HotelRegistration.vue';
import RequestHotel from './Hotel/RequestHotel.vue';
import NotFound from './NotFound.vue';
import AuthLogin from './Login/AuthLogin.vue'
import RegisterPage from './Customer/RegisterPage.vue'
import AdminDashboard from './Admin/AdminDashboard.vue'
import YourHotel from "./Hotel/YourHotel.vue"
const router = createRouter({
  history: createWebHistory(),
   routes: [
    {path:'/', redirect: '/hotel'},
    {path: '/hotel',component: HotelList},
    {path: '/hotel/:id',component: HotelDetail,
     props: true, // id will send as a prop in the component
     children: [
        {path: 'contact',component: ContactHotel},// /coaches/c1/contect
    ]},
    {path: '/register',component: HotelRegistration},
    {path: '/yourhotel',component: YourHotel},
    {path: '/admin',component: AdminDashboard},
    {path: '/requests',component: RequestHotel},
    {path: '/login', component: AuthLogin},
    {path: '/registerpage', component: RegisterPage},
    {path: '/:notFound(.*)',component: NotFound},
   ]
});
export default router;