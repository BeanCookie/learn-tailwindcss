import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon'

// 全局注册 svg-icon
Vue.component('SvgIcon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', true, /\.svg$/)
requireAll(req)