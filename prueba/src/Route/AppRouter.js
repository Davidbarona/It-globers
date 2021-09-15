import { Switch, Redirect, Route } from "react-router-dom";
import { Home } from '../Pages/Home';
import { Booking } from "../Pages/Booking";

const AppRouter = () => {
    return (
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/booking/:params" component={Booking}/>
                <Redirect to="/" />
            </Switch>
    )
}

export default AppRouter