// let LikeButton = require("./likeButton");
import LikeButton from "./likeButton"
import mount from "./mount"

const wrapper = document.querySelector('.wrapper')
/**
 const likeButton1 = new LikeButton()
wrapper.appendChild(likeButton1.render())

const likeButton2 = new LikeButton()
wrapper.appendChild(likeButton2.render())

const likeButton = new LikeButton()
//第一次插入DOM元素
wrapper.appendChild(likeButton.render())
//注册一个callback(定义钩子函数函数体?)，当state改变的时候callback会被执行
likeButton.onStateChange = (oldEl, newEl) => {
    //插入新生成的元素
    wrapper.insertBefore(newEl, oldEl)
    //将旧的元素删除掉
    setTimeout(() => {
        wrapper.removeChild(oldEl)
    }, 2000);
    
}
 */
mount(new LikeButton(), wrapper)

