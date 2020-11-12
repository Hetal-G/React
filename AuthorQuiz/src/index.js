import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import {shuffle,sample} from 'underscore';
import * as serviceWorker from './serviceWorker';
import  * as data from './data/authors.json';
import {BrowserRouter,Route,Link,withRouter} from 'react-router-dom'

const authors = data.authors;

function getTurnData(auths) {
  const allBooks = auths.reduce(function(p,c){
        return (p.concat(c.books));
  },[]);

  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: auths.find((author) => author.books.some((title) => title === answer))
  }

}
function resetState()
{
  return {
    turnData : getTurnData(authors),
    highlight : '',
    correctAns : ''
  };
}
let state = resetState();


function onAnswerRecv(answer)
{
  const isCorrect = state.turnData.author.books.some((title) => title === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  state.correctAns = answer;
  render();
  console.log(`Answer selected is ${answer} ${state.highlight}`);
}

function App() {
  return <AuthorQuiz {...state} onAnswer={onAnswerRecv} onContinue={()=>
    {
      state = resetState();
      render();
    }}/>; 
}

const updateAuthor = (author) => {
  fetch(`http://localhost:8080/authors`,
  {
    "body":JSON.stringify(author),
    "headers" : {
        "Accept" : "application/json",
        "Content-type" : "application/json"
    },
    "method" : "POST"
    }).then((response) => response.json());
  
}
const AddAuthorWrapper = withRouter( ({history}) =>
   <AddAuthorForm onAddAuthor={
    (author) => {       
      authors.push(author);
      updateAuthor(author);
      console.log(authors);
      history.push("/");
  }} />
);

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={App} />
          <Route path="/add" component={AddAuthorWrapper} />
        </React.Fragment>
      </BrowserRouter>
      
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
