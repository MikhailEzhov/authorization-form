import AuthorizationErrorMessage from '../../authorizationErrorMessage/AuthorizationErrorMessage';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './pageLogin.scss';



const PageLogin = () => {

    const [dataForm, setDataForm] = useState('');
    const [loadingDataServer, setLoadingDataServer] = useState(false);
    const [dataServer, setDataServer] = useState('');

    const navigate = useNavigate();
    const goProfile = () => navigate('/authorization-form/profile', {replase: true});

    const { 
        register, 
        handleSubmit,
        formState: {
            errors
        }} = useForm({
    });


    // имитация ответа от сервера
    const getData = () => new Promise(resolve => {
        setTimeout(() => resolve( 'steve.jobs@example.com' ), 2000)
    })


    const onSubmit = (data) => {
        setDataForm(data);
        setLoadingDataServer(true);
        getData()
            .then(data => setDataServer(data))
            .then(() => setLoadingDataServer(false))
            .catch(err => console.log(err))
    }


    // авторизация и перенаправление
    if (loadingDataServer === false && dataForm.login === dataServer) {
        localStorage.setItem("authorization", "true");
        localStorage.setItem("authorizedUser", dataForm.login);
        goProfile();
    }


    // отображение неверного пользователя по условию
    const authorizationErrorMessage = (loadingDataServer === true || dataForm === dataServer || dataForm.login === dataServer)
        ?
        null
        :
        <AuthorizationErrorMessage dataForm={dataForm}/>
    ;


    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                {authorizationErrorMessage}

                <label className="form__label">
                    Логин
                    <input 
                        type="text" 
                        className={errors?.login ? "form__input form__input_important" : "form__input"}
                        {...register("login", { required: true })}
                    />
                </label>
                <div>{errors?.login && <p className="form__error-message">Обязательное поле</p>}</div>

                <label className="form__label">
                    Пароль
                    <input 
                        type="password" 
                        className={errors?.password ? "form__input form__input_important" : "form__input"}
                        {...register("password", { required: true })}
                    />
                </label>
                <div>{errors?.password && <p className="form__error-message">Обязательное поле</p>}</div>

                <div className="form__block">
                    <input className="form__checkbox" type="checkbox" id="checkbox"  {...register("checkbox")} />
                    <label htmlFor="checkbox">Запомнить пароль</label>
                </div>
                
                <input 
                    type="submit"
                    value="Войти"
                    className={loadingDataServer ? 'form__button form__button_disabled' : 'form__button'}
                    disabled={loadingDataServer}
                />
            </form>
        </div>
    )
}

export default PageLogin;