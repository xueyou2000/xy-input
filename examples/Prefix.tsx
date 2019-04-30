import React from "react";
import { Input, InputGroup } from "../src";
import "../src/assets/index";
import { Select, Option } from "xy-select";
import "xy-select/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCalendarCheck, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default function() {
    return (
        <div>
            <Input prefix={<FontAwesomeIcon icon={faCalendarCheck} />} placeholder="输入用户名" />
            <br />
            <br />
            <Input suffix={<FontAwesomeIcon icon={faCaretSquareRight} />} />
        </div>
    );
}
