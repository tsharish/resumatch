import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import Steps from 'primevue/steps'
import Card from 'primevue/card'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Chips from 'primevue/chips'
import Chip from 'primevue/chip'
import Knob from 'primevue/knob'
import ProgressBar from 'primevue/progressbar'

import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Steps', Steps)
app.component('Card', Card)
app.component('Textarea', Textarea)
app.component('Button', Button)
app.component('Chips', Chips)
app.component('Chip', Chip)
app.component('Knob', Knob)
app.component('ProgressBar', ProgressBar)

app.mount('#app')
