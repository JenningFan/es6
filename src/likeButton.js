import createDomFromString from "./createDomFromString";

class LikeButton {
    //类属性在constructor内定义以及初始化
    constructor() {
      this.state = {
        isLiked: false
      }
    }
    changeLikeText() {
       const likeText = this.el.querySelector('.like-text')
       this.state.isLiked = !this.state.isLiked
       likeText.innerHTML = this.state.isLiked ? '取消' : '点赞'
       console.log(this);
    }
    render() {
      this.el = createDomFromString(`
        <button id='like-btn'>
          <span class='like-text'>点赞</span>
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