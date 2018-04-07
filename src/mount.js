//类似于ReactDOM.render函数
const mount = (component, wrapper) => {
    //将根据render函数生成的fragment element(单个组件，也可能是组件树)添加到页面的wrapper中
    wrapper.appendChild(component._renderDOM())
    //往传入的组件中注册onStateChange接口，组件每次被setState时都会调用该函数
    component.onStateChange = (oldEl, newEl) => {
        wrapper.insertBefore(newEl, oldEl)
        wrapper.removeChild(oldEl)
    } 
}
export default mount