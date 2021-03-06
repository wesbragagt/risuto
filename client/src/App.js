import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Home } from './components/Pages/Home';
import { Search } from './components/Pages/Search';
import { Forum } from './components/Pages/Forum';
import { Contact } from './components/Pages/Contact';
import { About } from './components/Pages/About';
import { Login } from './components/Pages/Login';
import { Register } from './components/Pages/Register';
import { NoMatch } from './components/Pages/NoMatch';
import { Profile } from './components/Pages/Profile';
import { MyLists } from './components/Pages/MyLists';

const App = () => {
    return (
        <Router>
            <Nav />
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/search' component={Search} />
                    <Route exact path='/forum' component={Forum} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/my-lists' component={MyLists} />
                    <Route exact component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
