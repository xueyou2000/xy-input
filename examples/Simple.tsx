import React from "react";
import { Input, InputGroup } from "../src";
import "../src/assets/index";

import { Select, Option } from "xy-select";
import "xy-select/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCalendarCheck, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default function() {
    return <Input placeholder="Basic usage" clearable={true} />;
}
