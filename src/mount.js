//类似于ReactDOM.render函数
const mount = (component, wrapper) => {
    //第一次插入DOM元素，将根据render函数生成的fragment element(单个组件，也可能是组件树)添加到页面的wrapper中
    wrapper.appendChild(component._renderDOM()) 
    //往传入的组件中注册onStateChange接口，组件每次被setState时都会调用该函数
    component.onStateChange = (oldEl, newEl) => {
        //插入新的元素
        wrapper.insertBefore(newEl, oldEl) 
        //删除旧的元素
        wrapper.removeChild(oldEl) 
    } 
}
export default mount
/**这种做法十分暴力，因为每次setState()->调用onStateChange()都重新构造、新增、删除DOM元素，会导致浏览器进行大量的重排，严重影响性能。这种暴力行为可以被Virtual-DOM规避掉， */