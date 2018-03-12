import createDomFromString from "./createDomFromString";

class LikeButton {
    //类属性在constructor内定义以及初始化
    constructor() {
      this.state = {
        isLiked: false
      }
    }
    setState(state) {
      this.state = state
      this.el = this.render()
    }
    changeLikeText() {
       this.setState({
         isLiked: !this.state.isLiked
       })
       console.log(this);
    }
    render() {
      //用JavaScript生成下面这段文档结构
      this.el = createDomFromString(`
        <button id='like-btn'>
          <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
          <span>👍</span>
        </button>
      `)
      //此处如果不用bind(this)，则this不是指向LikeButton的实例，而是指向this.el了，即div element
      this.el.addEventListener('click', this.changeLikeText.bind(this), false)
      return this.el
    }
}
export default LikeButton
//module.exports = LikeButton;