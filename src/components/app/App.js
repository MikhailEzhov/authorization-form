import PageLogin from '../pages/pageLogin/PageLogin'

import './app.scss';



const App = () => {
    return (
        <div className="app">

            <header className="header">
                <h1 className="header__title">ONLY.</h1>
            </header>

            <main>
                <PageLogin/>
            </main>

        </div>
    )

}

export default App;
