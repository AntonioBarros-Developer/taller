import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import primevue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import bulma from 'bulma/css/bulma.css'
 const app = createApp(App).use(router)
app.use(VueAxios,axios)
app.use(bulma)
app.use(primevue,{
    Themes:{
        presets:Aura
    }
})

.mount('#app')
export{app}