import React, { FC } from "react";
import { Text } from "@consta/uikit/Text";

import Student from "./data";



const StudentApi: FC<Student> = (props) => {
    
    return (
        <div className="info">
            <Text view="ghost" lineHeight = 'l' > <strong>Name: </strong> </Text> <Text view="primary" lineHeight = 'l' > {props.name} </Text> 
            <Text view="ghost" lineHeight = 'l' > <strong>Email: </strong> </Text> <Text view="primary" lineHeight = 'l' > {props.email} </Text>
            <Text view="ghost" lineHeight = 'l' > <strong>Team: </strong> </Text> <Text view="primary" lineHeight = 'l' > {props.team} </Text>
            <Text view="ghost" lineHeight = 'l' > <strong>Link: </strong> </Text> <Text view="primary" lineHeight = 'l' > {props.link} </Text>
        </div>
    );
};

export default StudentApi;