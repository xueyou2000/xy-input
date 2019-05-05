import React from "react";
import { Input, InputGroup } from "../src";
import { Select, Option } from "xy-select";
import "xy-select/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCalendarCheck, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default function() {
    return (
        <div>
            <InputGroup compact={true}>
                <Input style={{ width: "20%" }} clearable={true} />
                <Input style={{ width: "60%" }} clearable={true} />
                <Select defaultValue=".com" style={{ width: "20%" }}>
                    <Option value=".com">.com</Option>
                    <Option value=".jp">.jp</Option>
                    <Option value=".cn">.cn</Option>
                    <Option value=".org">.org</Option>
                </Select>
            </InputGroup>

            <InputGroup compact={true}>
                <Select style={{ width: "20%" }}>
                    <Option value="Http:">Http:</Option>
                    <Option value="Https:">Https:</Option>
                </Select>
                <Input style={{ width: "60%" }} clearable={true} />
                <Select defaultValue=".com" style={{ width: "20%" }}>
                    <Option value=".com">.com</Option>
                    <Option value=".jp">.jp</Option>
                    <Option value=".cn">.cn</Option>
                    <Option value=".org">.org</Option>
                </Select>
            </InputGroup>
        </div>
    );
}
