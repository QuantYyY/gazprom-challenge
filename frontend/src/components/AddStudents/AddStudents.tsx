import axios from "axios";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Text } from "@consta/uikit/Text";
import { Button } from '@consta/uikit/Button';

import Student from "../../data/data";

import '../../../static/styles/addStudents.css';

const AddStudents: FC<Student> = (props) =>{
    
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<Student>();

    const onSubmit: SubmitHandler<Student> = (data) => {
        axios.post('api/main/', {
            name: data.name,
            email: data.email,
            team: data.team,
            link: data.link,
        })
    };

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <label>
                   <Text view="primary">ФИО:</Text> 
                    <input {...register('name')} placeholder="Валентин Петрович" className="label"/>
                </label>

                <label>
                    <Text view="primary">Электронная почта:</Text> 
                    <input {...register('email')} placeholder="contest@gazprom.ru" className="label" />
                </label>

                <label>
                    <Text view="primary">Команда:</Text>
                    <input {...register('team')} className="label" />
                </label>

                <label>
                    <Text view="primary">Telegram:</Text>
                    <input {...register('link')} placeholder="@gazprom" className="label" />
                </label>
                
                <br />
                <Button type="submit" view="primary" form="default" label='Добавить' className="btn" />
            </form>
        </>
    );
};

export default AddStudents;