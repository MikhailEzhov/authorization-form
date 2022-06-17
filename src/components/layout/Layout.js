import { Outlet } from "react-router-dom";

import './layout.scss';



const Layout = () => {
    return (
        <div className="layout">
            <header className="layout__header">
                <h1 className="layout__header-title">ONLY.</h1>
            </header>

            <main className="layout-main">
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;