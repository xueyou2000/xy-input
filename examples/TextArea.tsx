import React from "react";
import { TextArea } from "../src";

export default function() {
    return (
        <div style={{ width: "500px" }}>
            <h1>文本域</h1>
            <TextArea placeholder="请输入" autosize={{ minRows: 2, maxRows: 4 }} />
        </div>
    );
}
