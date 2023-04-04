import "./styles.css";
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Type from "./routes/Type";

function App() {
 return <Router>
    <Switch>
        <Route path="/page/:genre">
           <Type />
        </Route>
        <Route path="/movie/:id">
            <Detail />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
 </Router>
    ;
}

 
export default App;
