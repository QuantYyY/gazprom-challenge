import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import Students from '../../data/Students';

import Student from '../../data/data';

const StudentsList: FC = () => {
    const [Student, setItems] = useState<Student[]>([]);

    useEffect(() => {
        axios
            .get('api/main')
            .then((response) => {
                setItems(response.data);
            });
    }, []);

    return(
        <>
            <Students data={Student}/>
        </>
    );
};

export default StudentsList;