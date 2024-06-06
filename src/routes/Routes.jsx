import Boshsahifa from "./bosh sahifa/bosh"
import Bulimlar from "./bulimlar/bulim"
import Bush from "./bush ish/ish"
import Qvp from "./QVP/qvp"
import Shifokorlar from "./shifokorlar/medic"
import Yangiliklar from "./yangiliklar/news"
import Aloqa from "./aloqa/aloqa"

import { Route } from "react-router-dom"

const Routes = () => {
    return (
        <div className="divs">
            <Route exact path="/">
                <Boshsahifa />
            </Route>
            <Route path="/medic">
                <Shifokorlar />
            </Route>
            <Route path="/departments">
                <Bulimlar />
            </Route>
            <Route path="/news">
                <Yangiliklar />
            </Route>
            <Route path="vacansy">
                <Bush />
            </Route>
            <Route path="/QVP">
                <Qvp />
            </Route>
            <Route path="/contact">
                <Aloqa />
            </Route>
        </div>
    )
}

export default Routes