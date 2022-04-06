import React, { FC } from "react";
import { Header, HeaderModule, HeaderLogo, HeaderMenu } from '@consta/uikit/Header';

import '../../../static/styles/header.css';
import { menuItems } from "./items";

const Item1: menuItems[] = [
    { label: 'Кандидаты' },
    { active: true },

];

const Item2: menuItems[] = [
    { label: 'Добавить участников' },
    { active: true },

];

const Headers: FC<menuItems> = (props) => {

    return(

        <Header leftSide = {
            <>
             <HeaderModule>
                <HeaderLogo>
                    <a href="/">
                        <img src='static/images/Logo.png' alt="Logo" className="logo" />
                    </a>
                </HeaderLogo>
            </HeaderModule>

            <HeaderModule indent="l">
                    <a href="/participants"><HeaderMenu items={Item1} /></a>
            </HeaderModule>

            <HeaderModule indent="l">
                    <a href="add"><HeaderMenu items={Item2} /></a>
            </HeaderModule>
            </>
        }></Header>

    );
};

export default Headers;