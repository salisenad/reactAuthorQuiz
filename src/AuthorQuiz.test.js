import React from 'react';
import ReactDom from 'react-dom';
import AuthorQuiz  from './AuthorQuiz';
import { render } from '@testing-library/react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new Adapter()});

const state = {
  turnData:  {
    books: ['The shining', 'IT', 'David Copperfield', 'A table of two cities'],
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikipedia Commons',
      books: ['david Copperfield', 'A tale of Two cities']
    },
  },
  highlight: 'none'
}

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
