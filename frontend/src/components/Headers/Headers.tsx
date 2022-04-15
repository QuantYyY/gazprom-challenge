import React, { FC } from "react";
import { Header, HeaderModule, HeaderLogo, HeaderMenu } from '@consta/uikit/Header';

import '../../../static/styles/header.css';
import { menuItems } from "./items";

const Item1: menuItems[] = [
    { label: 'Кандидаты' },
    { active: true },

];

const Item2: menuItems[] = [
    { label: 'Добавить' },
    { active: true },

];

const Item3: menuItems[] = [
    { label: 'Главная' },
    { active: true },

];

const Item4: menuItems[] = [
    { label: 'Задания' },
    { active: true },

];

const Headers: FC<menuItems> = (props) => {

    return(

        <Header leftSide = {
            <>
             <HeaderModule>
                <HeaderLogo>
                    <a href="/">
                        <img src='static/images/GLogo.svg' alt="Logo" className="logo" />
                    </a>
                </HeaderLogo>
            </HeaderModule>

            <HeaderModule indent="l">
                    <a href="/"><HeaderMenu items={Item3} /></a>
            </HeaderModule>

            <HeaderModule indent="l">
                    <a href="/participants"><HeaderMenu items={Item1} /></a>
            </HeaderModule>

            <HeaderModule indent="l">
                    <a href="add"><HeaderMenu items={Item2} /></a>
            </HeaderModule>
            
            <HeaderModule indent="l">
                    <a href="tasks"><HeaderMenu items={Item4} /></a>
            </HeaderModule>
            </>
        }></Header>

    );
};

export default Headers;