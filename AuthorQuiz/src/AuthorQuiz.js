import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './bootstrap.min.css';
import './AuthorQuiz.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AskWelcome from './Welcome.js';


let state = {
  userName : ''
}

function Hero() {
  return(<div className="row">
    <div className="jumbotron col-10 offset-1">
      <p id="userName" value={state.userName}></p>
      <h1>Authore Quiz</h1>
      <p>Select the book written by the shown author</p>      
    </div>
  </div>)
}

function UserName(props){
    return <p id="userName" dangerouslySetInnerHTML={{__html:props.userName}}></p>
}
function Book(props)
{
  function mappingToBgColor(highlight,correctAns,title)
  {
     const mapping ={
       'none' : '',
       'correct' : 'green',
       'wrong' : 'red'
     }
     if(title === correctAns)
       return mapping[highlight];
    
  }

  return(
  <div className="answer"  
            style={{backgroundColor : mappingToBgColor(props.highlight,props.correctAns,props.title)}}
            onClick={() => props.onClick(props.title)} 
       >
    <h4>{props.title}</h4>
  </div>
  );
}
function Turn({author,books,highlight,correctAns,onAnswerClicked}) {
  
  return(<div className="row turn" style={{backgroundColor: 'white'}}>
    <div className="col-5 offset-1 authoreimagediv">
      <img src={author.imageUrl} className="authoreimage" alt="Author"></img>
    </div>
    <div className="col-6 ">
      {books.map(title => <Book title={title} key={title} onClick={onAnswerClicked} highlight={highlight} correctAns={correctAns}/>)}
    </div>

  </div>)
}

Turn.propTypes = {
  author : PropTypes.shape({
    id : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired,    
  }),

  books : PropTypes.arrayOf(PropTypes.string).isRequired,
  highlight : PropTypes.string.isRequired,
  correctAns : PropTypes.string.isRequired,
  onAnswerClicked : PropTypes.func.isRequired
}

function Continue({show, onContinue}) {
  return(<div className="row continue">
    { show ?
      <div className="col-11">
        <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
      </div>
    :null}
  </div>)
}

function Footer() {
  return(<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">
        All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Common</a> and are in the public domain
      </p>
    </div>
  </div>)
}

function onNameSubmit(userName) {
  //ReactDOM.render(<UserName userName={userName} />, document.getElementById('userName'));
  console.log(`userName = ${userName}`);
  sessionStorage.setItem("userName", {userName});
  state = { userName : {userName}};
}

function AskWelcomeWrapper() {
  const userName = sessionStorage.getItem("userName");
  state = { userName : {userName}};
  const isUserFirstTime =  (userName === null);
  console.log(`isUserFirstTime ${isUserFirstTime} userName = ${userName}`);
  return (<AskWelcome onNameSubmit={onNameSubmit} isUserFirstTime={isUserFirstTime}/>)
}
function AuthorQuiz({turnData,highlight,correctAns,onAnswer,onContinue}) {
     return (
       <div className="container-fluid">
         <AskWelcomeWrapper />
         <Hero />
         <Turn {...turnData} highlight={highlight} correctAns={correctAns} onAnswerClicked={onAnswer}/>
         <Continue show={highlight === 'correct'} onContinue={onContinue}/>
         <p><Link to="/add">Add an Author</Link></p>
         <Footer />
       </div>
    );
  }


export default AuthorQuiz;
