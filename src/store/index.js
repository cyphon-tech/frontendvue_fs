import {createStore} from 'vuex';
import hotelsModule from './modules/hotels/index.js'
const store = createStore({
    modules:
    {
        hotels: hotelsModule
    }
});

export default store;
