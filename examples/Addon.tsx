import React from "react";
import { Input, InputGroup } from "../src";
import { Select, Option } from "xy-select";
import "xy-select/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCalendarCheck, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default function() {
    const selectBefore = (
        <Select style={{ width: 90 }}>
            <Option value="Http:">Http:</Option>
            <Option value="Https:">Https:</Option>
        </Select>
    );
    const selectAfter = (
        <Select defaultValue=".com" style={{ width: 80 }}>
            <Option value=".com">.com</Option>
            <Option value=".jp">.jp</Option>
            <Option value=".cn">.cn</Option>
            <Option value=".org">.org</Option>
        </Select>
    );

    return (
        <div>
            <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
            <br />
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            <br />
            <Input addonAfter={<FontAwesomeIcon icon={faThumbsUp} />} defaultValue="mysite" />
        </div>
    );
}
