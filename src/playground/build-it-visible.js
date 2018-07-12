class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visibility: false
        };

        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    };

    handleVisibilityToggle(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    };

    render(){
        return (
            <section>
             <h1>Visibility Toggle</h1>
             <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
            {this.state.visibility && (
                 <p>Hey. These are some details you can now see!</p>
             )}
/         </section>
        );
    };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));