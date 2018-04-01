import createDomFromString from "./createDomFromString";
import Component from "./component";

class LikeButton extends Component {
    //类属性在constructor内定义以及初始化
    constructor() {
      super()
      this.state = { isLiked: false }
    }
    onClick() {
      this.setState({
        isLiked: !this.state.isLiked
      })
    }
    render() {
      return`
      <button id='like-btn'>
      <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
      <span>👍</span>
      </button>
      `
    }
}
export default LikeButton
//module.exports = LikeButton;