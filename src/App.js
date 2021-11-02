
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './page/Home/index';
import Taekwondo from './page/Taekwondo/index';
import Vovinam from './page/Vovinam/index';
import Info from './page/Infomation/index';
import Shop from './page/Shop';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route  path="/taekwondo" component={Taekwondo} exact/>
        <Route  path="/shop" component={Shop} exact/>
        <Route path="/vovinam" component={Vovinam} exact/>
        <Route path="/info" component={Info} exact/>
        <Route path="/:slug"/>
      </Switch>
    </div>
  );
}

export default App;
