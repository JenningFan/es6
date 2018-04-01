//类似于ReactDOM.render函数
const mount = (component, wrapper) => {
    wrapper.appendChild(component._renderDOM())
    //往传入的组件中注册onStateChange接口
    component.onStateChange = (oldEl, newEl) => {
        wrapper.insertBefore(newEl, oldEl)
        wrapper.removeChild(oldEl)
    } 
}
export default mount