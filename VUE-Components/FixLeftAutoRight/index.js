import FixLeftAutoRight from './fixLeftAutoRight.vue'
import './style.scss'

FixLeftAutoRight.install = function (Vue) {
  Vue.component(FixLeftAutoRight.name, FixLeftAutoRight)
}

export default FixLeftAutoRight
