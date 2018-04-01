import Component from "./component"
class RedBlueButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red',
        }
    }
    
    onClick() {
        let color = this.state.color === 'red' ? 'blue' : 'red'
        this.setState({
            color: color
        })
    }

    render() {
        return `
            <div style="color: ${this.state.color};">${this.state.color}</div>
        `
    }
}
export default RedBlueButton