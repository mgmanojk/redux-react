
import './App.css';
import Contacts from './component/contacts/Contacts';
import Navbar from './component/element/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddContact from './component/contacts/AddContact';
import EditContact from './component/contacts/EditContact';
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <div className="py-3">
          <Switch>
            <Route exact={true} path='/' component={Contacts} />
            <Route path='/contacts/add' component={AddContact} />
            <Route path='/contacts/edit/:id' component={EditContact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
