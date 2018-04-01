import createDomFromString from "./createDomFromString";

export default class Component {
    constructor(props = {}) {
        this.props = props
    }
    setState(state) {
        //记录旧的组件
        const oldEl = this.el
        //更新state
        this.state = state
        //改变this.el，指向新构建的DOM
        this._renderDOM()
        if (this.onStateChange) {
            this.onStateChange(oldEl, this.el)
        }
    }
    _renderDOM() {
        this.el = createDomFromString(this.render())
        if (this.onClick) {
            this.el.addEventListener("click", this.onClick.bind(this), false)
        }
        return this.el
    }

}