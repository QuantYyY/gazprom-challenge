import React, { FC } from "react";
import { Grid, GridItem } from "@consta/uikit/Grid";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";

import '../../../../static/styles/tasks.css';


const Tasks: FC = () => {
    
    return (
        <Grid cols="3" className="tasks">
            <GridItem>
                <Card verticalSpace = {"2xl"} horizontalSpace = {"2xl"} shadow = {true} className="card">
                    <Text view="link" weight="regular" size="2xl" font="primary" >
                        React-отбор
                    </Text>

                    <Text view="primary" font="primary" weight="light" size="l"  className="text" >
                        Задание: реализовать готовый компонент с функцией подстановки падежей. Рассмотреть разные возможности реализации данной задачи.
                    </Text>

                    <Text view="brand" font="primary" weight="light" size="l"  className="text" >
                        Назначено: Команда №3
                    </Text>
                </Card>
            </GridItem>

            <GridItem>    
                <Card verticalSpace = {"2xl"} horizontalSpace = {"2xl"} shadow = {true} className="card">
                    <Text view="link" weight="regular" size="2xl" font="primary" >
                        Java-отбор
                    </Text>

                    <Text view="primary" font="primary" weight="light" size="l"  className="text" >
                        Задание: реализовать работу с базой данных PostgreSQL. Рассмотреть разные возможные варианты работы с БД. 
                    </Text>

                    <Text view="brand" font="primary" weight="light" size="l"  className="text" >
                        Назначено: Команда №1
                    </Text>
                </Card>
            </GridItem>
            
            <GridItem>
                <Card verticalSpace = {"2xl"} horizontalSpace = {"2xl"} shadow = {true} className="card">
                    <Text view="link" weight="regular" size="2xl" font="primary" >
                        .NET-отбор
                    </Text>

                    <Text view="primary" font="primary" weight="light" size="l"  className="text" >
                        Задание: реализовать работу с поиском информаци по БД и ее обработки. Рассмотреть разные варианты и разные типы данных. 
                    </Text>

                    <Text view="brand" font="primary" weight="light" size="l"  className="text" >
                        Назначено: Команда №2
                    </Text>
                </Card>
            </GridItem>
        </Grid>
    );
};

export default Tasks;