import React, { FC } from "react";
import { Text } from "@consta/uikit/Text";

import Student from "./data";



const StudentApi: FC<Student> = (props) => {
    
    return (
        <div className="info">
            <p /><br /><b>Id:{props.id}</b>
            <br /> <b>Name: </b> {props.name} 
            <br /> <strong>Email: </strong> {props.email}
            <br /> <strong>Team: </strong> {props.team}
            <br /> <strong>Link: </strong> {props.link}
            <br />
        </div>
    );
};

export default StudentApi;