import React,{Component} from 'react';
import './Welcome.css';

class Welcome extends Component {

    constructor(props){
        super(props);
        this.state = {
                        userName : '',
                        display : 'block'
                    }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);      
    }

    componentDidMount() {
        this.props.isUserFirstTime ? this.setState({display : 'block'}) : this.setState({display : 'block'});
    }

    onFieldChange(event) {
        this.setState({[event.target.name ] : event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({display : 'none'});
        this.props.onNameSubmit(this.state.userName);    
    }

    render() {
        return (
            <div className="row welcome" style={{display : this.state.display}}>                
                <form className="welcome-content" onSubmit={this.handleSubmit}>
                  <h3 style={{textAlign : "center", color : "red"}}>Welcome to AuthorQuiz </h3>
                    <div className="welcome__input">
                        <label htmlFor="userName">Your Name</label>
                        <input type="text" name="userName" defaultValue={this.state.userName} onChange={this.onFieldChange} required />
                    </div>
                    <input type="submit" value="Lets Play"></input>
                </form>
            </div>
        );

    }
}

export default function AskWelcome({onNameSubmit,isUserFirstTime}) {
    return (<div>
               <Welcome onNameSubmit={onNameSubmit} isUserFirstTime={isUserFirstTime}/>
            </div>) ;
}
