import React from 'react';
import AuthorQuiz from './AuthorQuiz';
import ReactDOM from 'react-dom';
import Enzyme,{mount,shallow,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const state = {
  turnData : {
    books :['The Shining', 'IT','Heart of Darkness','Harry Potter and the Sorcerers Stone'],
    author :
      {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg' 
      },
    },
    highlight: 'none',
    correctAns: 'IT'  
}
/*test('renders without crash', () => {
  const { getByText } = render(<AuthorQuiz {...state} onAnswer={()=>{}} />);
  const linkElement = getByText(/Author Quiz/i);
  expect(linkElement).toBeInTheDocument();
});*/

describe('render AuthorQuiz', () => {
 it("renders without crash", () => {
   const div = document.createElement("div");
   ReactDOM.render(<AuthorQuiz {...state} onAnswer={()=>{}}/>,div);
 })
});
