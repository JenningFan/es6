import createDomFromString from "./createDomFromString";

export default class Component {
    constructor(props = {}) {
        this.props = props
    }
    setState(state) {
        //先用oldEl记录当前的(旧)组件形态
        const oldEl = this.el
        //更新state
        this.state = state
        //调用_renderDOM后会改变this.el，使之指向根据现有新的render函数来构建的新DOM
        this._renderDOM()
        //第一次调用mount函数时，mount函数内就为组件注册的onStateChange函数，每次state有改变时都会调用此函数，将根据当前state render出来的新组件替换旧组件
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