class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.input = null
    }

    handleClick(e) {
        console.log(e)
    }

    render(){
        return <div>
            <input type="text" ref={}/>
            <button conClick={handleClick}></button>
        </div>
    }
}

ReactDOM.render(<Home/>, document.getElementById('app'))