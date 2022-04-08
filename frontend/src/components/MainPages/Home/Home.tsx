import React, { FC } from "react";
import { Text } from "@consta/uikit/Text";
import { CollapseGroup } from '@consta/uikit/CollapseGroup';

import '../../../../static/styles/home.css'

const Home: FC = () =>{
    
    type Item = {
        label: string;
        content: React.ReactNode;
        rightSide?: React.ReactNode | React.ReactNode[];
      };;

    const items: Item[] = [
        {
          label: 'Как проходят отборы?',
          content: 'Отборы проходят в несколько этапов, начиная от обычной беседы и заканчивая стажировкой в компании',
        },
        {
          label: 'Будут ли платить зарплату во время обучения?',
          content: 'Нет, во время обучения заработная плата не предусмотрена',
        },
        {
          label: 'Что будет после отборов?',
          content: 'Хорошо проявившим себя кандидатам мы предложим работу в компании',
        },
        {
            label: 'Сколько длится отбор?',
            content: 'По разному, в среднем 1-2 месяца',
        },
        {
            label: 'Можно ли проходить отбор дистанционно?',
            content: 'Первые этапы будут обязательно проходить дистанционно, но в зависимости от направления может потребоваться личное присутствие',
        },
      ];

    return (
    <div className="home">
        <Text  
            view="brand" 
            align="left" 
            size="5xl" 
            weight="bold" 
            transform="uppercase"
            font="primary"
            className="anim"
        >
            отборы и тренинги
        </Text>

        <Text  
            view="primary" 
            align="left" 
            size="4xl" 
            weight="regular" 
            font="primary"
            className="anim"
        >
            для специалистов разных областей
        </Text>
        
        <Text  
            view="link" 
            align="left" 
            size="3xl" 
            weight="regular" 
            font="primary"
            className="anim"
        >
            в крупнейшей компании Газпром
        </Text>
    

        <div className="about">
            <span className="span-info">
                <Text
                    view="primary"
                    align="left"
                    size="3xl"
                    weight="regular"
                    font="primary"
                >
                    О компании
                </Text>
            </span>

            <Text 
                view="primary"
                align="left"
                size="xl"
                weight="regular"
                font="primary"
            >
            "Газпром" - крупнейшая газовая компания мира, 
            занимающаяся геологоразведкой и добычей природного газа, 
            газового конденсата, нефти, их транспортировкой, переработкой, и 
            реализацией в России и за ее пределами. Основной вид деятельности — реализация на 
            территории Российской Федерации природного газа. 
            </Text>
        </div>

        <div className="about-project">
            <span className="span-info">
                <Text
                    view="primary"
                    align="left"
                    size="3xl"
                    weight="regular"
                    font="primary"
                >
                    О проекте
                </Text>
            </span>

            <Text 
                view="primary"
                align="left"
                size="xl"
                weight="regular"
                font="primary"
            >
            Централизованная система, нацеленная на автоматизацию процессов набора и обучения новых
            сотрудников. Использование устоявшихся методов отбора персонала в новой оболочке. 
            </Text>
        </div>

        <div className="about-project">
            <span className="span-info">
                    <Text
                        view="primary"
                        align="left"
                        size="3xl"
                        weight="regular"
                        font="primary"
                    >
                        Частые вопросы
                    </Text>
                </span>

            <CollapseGroup items={items} size="l" view="primary" />
        </div>

        <footer>
            <Text view="primary" weight="regular" font="primary" size="l" align="center">
                © 2022 ПАО «Газпром»
            </Text>
        </footer>
    </div>

    
        
    );
};

export default Home;