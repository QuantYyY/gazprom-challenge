import React, { FC } from "react";

import { Card } from '@consta/uikit/Card';
import StudentApi from "./StudentApi";
import Student from './data';

import '../../static/styles/students.css';
import { Grid, GridItem } from '@consta/uikit/Grid'

type StudentsProps = {
    data: Student[];
};

const Students: FC<StudentsProps> = (props) => {
    const {data} = props;


    return(
            <Grid cols="4" className="card">
                {data.map((item) => (
                    <>
                        <GridItem>
                            <Card verticalSpace = {"2xl"} horizontalSpace = {"2xl"} shadow = {true} className="api">
                                <StudentApi key={item.id} {...item} />
                            </Card>
                        </GridItem>
                    </>
                    
                ))
                }
            </Grid>
    );
};

export default Students;