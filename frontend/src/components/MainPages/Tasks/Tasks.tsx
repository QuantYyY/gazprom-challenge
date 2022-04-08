import React, { FC } from "react";
import { Grid, GridItem } from "@consta/uikit/Grid";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { Modal } from '@consta/uikit/Modal';

import '../../../../static/styles/tasks.css';


const Tasks: FC = () => {
    
    const [isModalOpen1, setIsModalOpen1] = React.useState(false);
    const [isModalOpen2, setIsModalOpen2] = React.useState(false);
    const [isModalOpen3, setIsModalOpen3] = React.useState(false);

    return (
        <div className="home">


            <Grid cols="3" className="tasks">
                <GridItem>
                    <Card verticalSpace = {"2xl"} horizontalSpace = {"2xl"} shadow = {true} className="cards" >
                        <Text view="link" weight="regular" size="2xl" font="primary" >
                            React-отбор
                        </Text>

                        <Text view="primary" font="primary" weight="light" size="l"  className="text" >
                            Задание: реализовать готовый компонент с функцией подстановки падежей. Рассмотреть разные возможности реализации данной задачи.
                        </Text>

                        <Text view="brand" font="primary" weight="light" size="l"  className="text" >
                            Назначено: Команда №3
                        </Text>

                        <Button
                            size="m"
                            view="primary"
                            label="Подробнее о задание"
                            width="default"
                            onClick={() => setIsModalOpen1(true)}
                            className = "open-btn"
                        />

                        <Modal
                                isOpen={isModalOpen1}
                                hasOverlay
                                onClickOutside={() => setIsModalOpen1(false)}
                                onEsc={() => setIsModalOpen1(false)}
                                className = "modal"
                            >

                                <div className="close-btn">
                                    <Text as="p" size="l" view="brand" weight="light" >
                                        Задание для React-отбора
                                    </Text>

                                    <Text as="p" size="m" view="primary">
                                        Задание подразумевает создание приложения, в котором 
                                        в поле для ввода набирается слово в Им. падеже и единственного числа.
                                        На выход идёт слово в разных падежах. Желательно рассмотреть разные варианты, например: женский и мужской род.
                                    </Text>

                                    <Button
                                        size="m"
                                        view="primary"
                                        label="Закрыть"
                                        width="default"
                                        onClick={() => setIsModalOpen1(false)}
                                    />
                                </div>

                        </Modal>

                    </Card>
                </GridItem>




                <GridItem>    
                    <Card verticalSpace = {"2xl"} horizontalSpace = {"2xl"} shadow = {true} className="cards">
                        <Text view="link" weight="regular" size="2xl" font="primary" >
                            Java-отбор
                        </Text>

                        <Text view="primary" font="primary" weight="light" size="l"  className="text" >
                            Задание: реализовать работу с базой данных PostgreSQL. Рассмотреть разные возможные варианты работы с БД. 
                        </Text>

                        <Text view="brand" font="primary" weight="light" size="l"  className="text" >
                            Назначено: Команда №1
                        </Text>

                        <Button
                            size="m"
                            view="primary"
                            label="Подробнее о задание"
                            width="default"
                            onClick={() => setIsModalOpen2(true)}
                            className = "open-btn"
                        />

                        <Modal
                                isOpen={isModalOpen2}
                                hasOverlay
                                onClickOutside={() => setIsModalOpen2(false)}
                                onEsc={() => setIsModalOpen2(false)}
                                className = "modal"
                            >

                                <div className="close-btn">
                                    <Text as="p" size="l" view="brand" weight="light" >
                                        Задание для Java-отбора
                                    </Text>

                                    <Text as="p" size="m" view="primary">
                                        Задание подразумевает создание приложения, в котором 
                                        необходимо реализовать функции изменения БД, а также 
                                        создать GUI для удобного использования.
                                    </Text>

                                    <Button
                                        size="m"
                                        view="primary"
                                        label="Закрыть"
                                        width="default"
                                        onClick={() => setIsModalOpen2(false)}
                                    />
                                </div>

                        </Modal>

                    </Card>
                </GridItem>
                
                <GridItem>
                    <Card verticalSpace = {"2xl"} horizontalSpace = {"2xl"} shadow = {true} className="cards">
                        <Text view="link" weight="regular" size="2xl" font="primary" >
                            .NET-отбор
                        </Text>

                        <Text view="primary" font="primary" weight="light" size="l"  className="text" >
                            Задание: реализовать работу с поиском информации по БД и ее обработки. Рассмотреть разные варианты и разные типы данных. 
                        </Text>

                        <Text view="brand" font="primary" weight="light" size="l"  className="text" >
                            Назначено: Команда №2
                        </Text>

                        <Button
                            size="m"
                            view="primary"
                            label="Подробнее о задание"
                            width="default"
                            onClick={() => setIsModalOpen3(true)}
                            className = "open-btn"
                        />

                        <Modal
                                isOpen={isModalOpen3}
                                hasOverlay
                                onClickOutside={() => setIsModalOpen3(false)}
                                onEsc={() => setIsModalOpen3(false)}
                                className = "modal"
                            >

                                <div className="close-btn">
                                    <Text as="p" size="l" view="brand" weight="light" >
                                        Задание для .NET-отбора
                                    </Text>

                                    <Text as="p" size="m" view="primary">
                                        Задание подразумевает создание приложения, в котором 
                                        необходимо реализовать функции поиска информации в БД, а 
                                        также её вывода. Рассмотреть разные варианты и типизировать входные данные.
                                    </Text>

                                    <Button
                                        size="m"
                                        view="primary"
                                        label="Закрыть"
                                        width="default"
                                        onClick={() => setIsModalOpen3(false)}
                                    />
                                </div>
                        </Modal>

                    </Card>
                </GridItem>
            </Grid>
        </div>
    );
};

export default Tasks;