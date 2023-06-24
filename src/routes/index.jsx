import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    const testRoute = false
    return(
        <BrowserRouter>
        {!testRoute ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}