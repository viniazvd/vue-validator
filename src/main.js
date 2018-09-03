import Vue from 'vue'
import Root from './Root.vue'

import { validator } from './plugin/validator'

Vue.use(validator)

// validator.registerCustomEvent('validator', {})

Vue.config.productionTip = false

new Vue({ render: h => h(Root) }).$mount('#app')
