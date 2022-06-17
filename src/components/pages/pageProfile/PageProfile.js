import './pageProfile.scss';


function PageProfile() {

    return(
        <div className="container">
            <div className="profile">
                <p className="profile__text">Здравствуйте, <strong>steve.jobs@example.com</strong></p>
                <button className="profile__button">Выйти</button>
            </div>
        </div>
    )
}

export default PageProfile;