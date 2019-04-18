import React from "react";
import classNames from "classnames";
import { InputGroupProps } from "./interface";

export function InputGroup(props: InputGroupProps) {
    const { prefixCls = "xy-input-group", className, style, compact = false, children } = props;
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-compact`]: compact
    });

    return (
        <div className={classString} style={style}>
            {children}
        </div>
    );
}

export default React.memo(InputGroup);
