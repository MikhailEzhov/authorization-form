import exclamationMark from './exclamation-mark.svg';
import './authorizationErrorMessage.scss';



function AuthorizationErrorMessage({dataForm}) {

    return(
        <div className='authorization-error'>
            <img src={exclamationMark} alt="exclamation-mark"/>
            <p className='authorization-error__text'>Пользователя {dataForm.login} не существует</p>
        </div>
    )
}

export default AuthorizationErrorMessage;