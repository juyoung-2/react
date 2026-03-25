import Display from "./components/display/Display";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store} >
      <Display/>
    </Provider>
  );
}

export default App;
