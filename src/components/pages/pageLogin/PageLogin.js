import { useForm } from "react-hook-form";

import './pageLogin.scss';



const PageLogin = () => {

    const { 
        register, 
        handleSubmit,
        formState: {
            errors
        }} = useForm({
    });


    const onSubmit = (data) => {
        const formData = JSON.stringify(data);
        console.log(formData);
    }


    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

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
                
                <input className="form__button" type="submit" value="Войти" />
            </form>
        </div>
    )
}

export default PageLogin;