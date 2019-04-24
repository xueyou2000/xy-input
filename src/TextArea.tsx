import classNames from "classnames";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useControll } from "utils-hooks";
import CalcTextareaHeight from "./CalcTextareaHeight";
import { TextAreaProps } from "./interface";

export function TextArea(props: TextAreaProps) {
    const { prefixCls = "xy-textarea", className, style, defaultValue, autosize, onChange, ...genericProps } = props;
    const inputRef = useRef();
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue");
    const [textareaStyle, setTextareaStyle] = useState<React.CSSProperties>({});
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-disabled`]: props.disabled
    });

    function changeValue(val: string) {
        if (props.disabled) {
            return;
        }

        if (!isControll) {
            setValue(val);
        }

        if (onChange) {
            onChange(val);
        }
    }

    function changeHandle(event: React.ChangeEvent<HTMLTextAreaElement>) {
        changeValue(event.target.value);
    }

    function resizeTextarea() {
        const textareaEle = inputRef.current;
        if (autosize === false || autosize === undefined || !textareaEle) {
            return false;
        }
        const minRows = autosize === true ? null : autosize.minRows;
        const maxRows = autosize === true ? null : autosize.maxRows;
        const textareaCalcStyle = CalcTextareaHeight(textareaEle, minRows, maxRows);

        const lastTextareaStyle = textareaStyle;
        const _style = Object.assign({}, lastTextareaStyle, textareaCalcStyle);
        if (lastTextareaStyle.height !== _style.height) {
            setTextareaStyle(_style);
        }
    }

    useLayoutEffect(() => {
        resizeTextarea();
    }, [value]);

    return <textarea {...genericProps} ref={inputRef} {...(isControll ? { value: value || '' } : { defaultValue: value })} aria-disabled={props.disabled} className={classString} style={Object.assign({}, style, textareaStyle)} onChange={changeHandle} />;
}

export default React.memo(TextArea);
