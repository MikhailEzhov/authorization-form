import { Link } from "react-router-dom";

import './pageProfile.scss';



function PageProfile() {

    return(
        <div className="container">
            <div className="profile">
                <p className="profile__text">Здравствуйте, <strong>{localStorage.getItem('authorizedUser')}</strong></p>
                <Link to="/login" onClick={() => localStorage.clear()} className="profile__button">ВЫХОД</Link>
            </div>
        </div>
    )
}

export default PageProfile;