import axios from "axios";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Student from "../../data/data";



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
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ФИО:
                    <input {...register('name')} placeholder="Валентин Петрович" />
                </label>
                <br />

                <label>Электронная почта:
                    <input {...register('email')} placeholder="contest@gazprom.ru" />
                </label>
                <br />

                <label>Команда:
                    <input {...register('team')} />
                </label>

                <br />
                <label>Telegram:
                    <input {...register('link')} placeholder="@gazprom" />
                </label>
                
                <input type="submit"/>
            </form>
        </>
    );
};

export default AddStudents;