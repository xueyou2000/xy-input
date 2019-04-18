import React from "react";
import { Input, InputGroup } from "../src";
import { Select, Option } from "xy-select";
import "xy-select/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCalendarCheck, faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";
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
        <div style={{ width: "500px" }}>
            <h1>可清除</h1>
            <Input placeholder="Basic usage" clearable={true} />

            <h1>前置/后置</h1>
            <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
            <br />
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            <br />
            <Input addonAfter={<FontAwesomeIcon icon={faThumbsUp} />} defaultValue="mysite" />

            <h1>前缀/后缀</h1>
            <Input prefix={<FontAwesomeIcon icon={faCalendarCheck} />} placeholder="输入用户名" />
            <br />
            <br />
            <Input suffix={<FontAwesomeIcon icon={faCaretSquareRight} />} />

            <h1>输入框组合</h1>
            <InputGroup compact={true}>
                <Input style={{ width: "20%" }} />
                <Input style={{ width: "60%" }} />
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
                <Input style={{ width: "60%" }} />
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
