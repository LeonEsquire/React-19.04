import React from 'react';
import ReactDom from 'react-dom';

import Blog from './components/Blog';
import WelcomeModal from './components/WelcomeModal';

class App extends React.Component {
  render() {
    let posts = [
      {
        title: 'post1',
        postBody: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est blanditiis dolorem beatae animi dicta adipisci laborum. Veniam natus ad quas sint autem eum optio eos laudantium quibusdam deserunt? Animi, praesentium?',
      },
      {
        title: 'post2',
        postBody: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est blanditiis dolorem beatae animi dicta adipisci laborum. Veniam natus ad quas sint autem eum optio eos laudantium quibusdam deserunt? Animi, praesentium?',
      },
      {
        title: 'post3',
        postBody: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est blanditiis dolorem beatae animi dicta adipisci laborum. Veniam natus ad quas sint autem eum optio eos laudantium quibusdam deserunt? Animi, praesentium?',
      },
      {
        title: 'post4',
        postBody: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est blanditiis dolorem beatae animi dicta adipisci laborum. Veniam natus ad quas sint autem eum optio eos laudantium quibusdam deserunt? Animi, praesentium?',
      },
    ]
    return (
      <>
        <Blog posts={ posts }/>
        <WelcomeModal/>
      </>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));