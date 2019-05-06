import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/WelcomeModal'
import Blog from './components/Blog'

let posts = [
    {
        id: 1,
        title: 'Lorem',
        subtitle: 'Lorem ipsum dolor',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque corporis eos expedita facere ' +
            'harum nisi non vero? Aut doloremque doloribus incidunt iste maiores molestias nostrum perspiciatis similique tenetur veniam?',
        date: '18.03.1991',
        author: 'Autor',
    },
    {
        id: 3,
        title: 'Lorem',
        subtitle: 'Lorem ipsum dolor',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque corporis eos expedita facere ' +
            'harum nisi non vero? Aut doloremque doloribus incidunt iste maiores molestias nostrum perspiciatis similique tenetur veniam?',
        date: '28.03.1991',
        author: 'Autor_2',
    },

    {
        id: 2,
        title: 'Lorem',
        subtitle: 'Lorem ipsum dolor',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque corporis eos expedita facere ' +
            'harum nisi non vero? Aut doloremque doloribus incidunt iste maiores molestias nostrum perspiciatis similique tenetur veniam?',
        date: '08.03.1991',
        author: 'Autor_3',
    },
];

class App extends React.Component {
    render() {
        return (
            <>
                <Welcome/>
                <Blog posts={posts}/>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));