class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            toggled : false
        }
    }


    handleToggle(){
        this.setState( (prevState) => {
            return {
                toggled: !prevState.toggled
            }
        })
    }


    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.toggled ? 'Hide Text' : 'Show Text'}</button>
                {this.state.toggled && <p>Where did I come from???</p>}
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.querySelector("#app"));











