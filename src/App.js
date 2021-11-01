
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './page/Home/index';
import Taekwondo from './page/Taekwondo/index';
import Vovinam from './page/Vovinam/index';
import OrderPage from './page/OrderPage/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route  path="/taekwondo" component={Taekwondo} exact/>
        <Route path="/vovinam" component={Vovinam} exact/>
        <Route path="/orderpage" component={OrderPage} exact/>
        <Route path="/:slug"/>
      </Switch>
    </div>
  );
}

export default App;
