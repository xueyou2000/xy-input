import classNames from "classnames";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useControll } from "utils-hooks";
import CalcTextareaHeight from "./CalcTextareaHeight";
import { TextAreaProps } from "./interface";

export const TextArea = React.forwardRef((props: TextAreaProps, inputRef: React.MutableRefObject<any>) => {
    const { prefixCls = "xy-textarea", className, style, defaultValue, autosize, onChange, onBlur, ...genericProps } = props;
    if (!inputRef) {
        inputRef = useRef(null);
    }
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue");
    const [textareaStyle, setTextareaStyle] = useState<React.CSSProperties>({});
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-disabled`]: props.disabled,
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

    function blurHandle(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (onBlur) {
            onBlur(e);
        }
        if (/webOS|iPhone|iPod/i.test(navigator.userAgent)) {
            // 移动端, 防止ios键盘底部突出
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
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

    return (
        <textarea
            {...genericProps}
            ref={inputRef}
            {...(isControll ? { value: value || "" } : { defaultValue: value })}
            aria-disabled={props.disabled}
            className={classString}
            style={Object.assign({}, style, textareaStyle)}
            onBlur={blurHandle}
            onChange={changeHandle}
        />
    );
});

export default React.memo(TextArea);
