import Routing from "./Routing";
import { Provider } from 'react-redux';
import store from "./redux-essentials/store";
function App() {

  
  return (
    <Provider store={store} >
       
        <Routing></Routing>
        </Provider>
  );
}

export default App;
