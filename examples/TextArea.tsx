import React from "react";
import { TextArea } from "../src";
import "../src/assets/index";

export default function() {
    return (
        <div style={{ width: "500px" }}>
            <TextArea placeholder="请输入" autosize={{ minRows: 2, maxRows: 4 }} />
        </div>
    );
}
