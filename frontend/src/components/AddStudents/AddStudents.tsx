import axios from "axios";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Text } from "@consta/uikit/Text";
import { Button } from '@consta/uikit/Button';
import { Informer } from '@consta/uikit/Informer';


import Student from "../../data/data";

import '../../../static/styles/addStudents.css';

const AddStudents: FC<Student> = (props) =>{
    
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm<Student>({
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<Student> = (data) => {
        axios.post('api/main/', {
            name: data.name,
            email: data.email,
            team: data.team,
            link: data.link,
        });
        reset();
        return <Informer status="success" view="filled" title="Всё хорошо — это 'success'"
        label="Подходит, чтобы рассказать об успешном результате процесса, в котором сейчас находится пользователь"
    />
    };

    return(
        <>
        
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <label>
                   <Text view="primary" size="xl" className="text">ФИО:</Text> 
                    <input {...register('name', 
                    {
                        required: 'Поле ФИО обязательно к заполнению!',
                        minLength: {
                            value: 10,
                            message: 'Минимум 10 символов в поле ФИО'
                        }
                } )} placeholder="Валентин Петрович" className="label"/>
                </label>

                <label>
                    <Text view="primary" size="xl" className="text">Электронная почта:</Text> 
                    <input {...register('email', {required: 'Поле Электронная почта обязательно к заполнению!'} )} placeholder="contest@gazprom.ru" className="label" />
                </label>

                <label>
                    <Text view="primary" size="xl" className="text">Команда:</Text>
                    <input {...register('team')} className="label" />
                </label>

                <label>
                    <Text view="primary" size="xl" className="text">Telegram:</Text>
                    <input {...register('link', 
                    {required: 'Поле Telegram обязательно к заполнению!'}
                     )} placeholder="@gazprom" className="label" />
                </label>

                
                <br />
                <Button type="submit" size="l"  disabled = {!isValid} view="primary" form="default" className="btn" label='Добавить!' />

                <div className="error">
                    {errors?.name && <p>{errors?.name?.message || "Error!" }</p>}
                    {errors?.email && <p>{errors?.email?.message || "Error!" }</p>}
                    {errors?.link && <p>{errors?.link?.message || "Error!" }</p>}
                </div>

            </form>
            
        </>
    );
};

export default AddStudents;