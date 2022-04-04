import React, { FC } from "react";

import StudentApi from "./StudentApi";
import Student from './data';

type StudentsProps = {
    data: Student[];
};

const Students: FC<StudentsProps> = (props) => {
    const {data} = props;


    return(
        <div>
            {data.map((item) => (
                <StudentApi key={item.id} {...item} />
            ))
            }
        </div>
    );
};

export default Students;