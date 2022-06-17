import Layout from '../layout/Layout';
import PageLogin from '../pages/pageLogin/PageLogin'
import PageProfile from '../pages/pageProfile/PageProfile'
import PrivateRoute from '../privateRoute/PrivateRoute'
import { BrowserRouter, Routes,Route,} from "react-router-dom";



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/authorization-form" element={<Layout />}>
                    <Route index element={<PageLogin />} />
                    <Route path="/authorization-form/login" element={<PageLogin />} />
                    <Route path="/authorization-form/profile" element={
                        <PrivateRoute>
                            <PageProfile />
                        </PrivateRoute>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
