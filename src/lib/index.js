import sum2 from "./sum2";

const components = [
    sum2
 // ...添加组件
]
 
const install = function (Vue, opts = {}) {
 components.map(component => {
 	Vue.component(component.name, component);
 })
}
 
/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
	install.use(window.Vue);
}
 
export default {
	// version: '1.0.4',			//此为npm版本号可填可不填，在package.json才为重要
	sumFunction,
	sum2
}