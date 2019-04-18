import React from "react";
import classNames from "classnames";
import { useControll } from "utils-hooks";
import { InputProps } from "./interface";
import InputGroup from "./InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

export function Input(props: InputProps) {
    const { prefixCls = "xy-input", className, style, type = "text", defaultValue, onChange, clearable = false, addonBefore, addonAfter, prefix, suffix, ...genericProps } = props;
    const [value, setValue, isControll] = useControll(props, "value", "defaultValue");
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

    function changeHandle(event: React.ChangeEvent<HTMLInputElement>) {
        changeValue(event.target.value);
    }

    function cleanHandle() {
        changeValue("");
    }

    function cleanBtn() {
        return (
            <i className={`${prefixCls}-clear`} onClick={cleanHandle}>
                <FontAwesomeIcon icon={faTimesCircle} />
            </i>
        );
    }

    function renderAffix() {
        const canBeClearn = value && clearable;
        if (prefix || (suffix || canBeClearn)) {
            const _suffix = canBeClearn ? cleanBtn() : suffix;
            return (
                <div className={`${prefixCls}-affix-wrapper`}>
                    {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
                    {renderInput()}
                    {_suffix && <span className={`${prefixCls}-suffix`}>{_suffix}</span>}
                </div>
            );
        } else {
            return renderInput();
        }
    }

    function renderInput() {
        return <input {...genericProps} type={type} {...(isControll ? { value } : { defaultValue: value })} aria-disabled={props.disabled} className={classString} style={style} onChange={changeHandle} />;
    }

    if (addonBefore || addonAfter) {
        return (
            <div className={`${prefixCls}-group-wrapper`}>
                <InputGroup>
                    {addonBefore && <span className={`${prefixCls}-addon`}>{addonBefore}</span>}
                    {renderAffix()}
                    {addonAfter && <span className={`${prefixCls}-addon`}>{addonAfter}</span>}
                </InputGroup>
            </div>
        );
    } else {
        return renderAffix();
    }
}

export default React.memo(Input);
