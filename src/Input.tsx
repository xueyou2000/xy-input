import React from "react";
import classNames from "classnames";
import { useControll } from "utils-hooks";
import { InputProps } from "./interface";
import InputGroup from "./InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const Input = React.forwardRef((props: InputProps, ref: React.MutableRefObject<any>) => {
    const { prefixCls = "xy-input", className, style, type = "text", defaultValue, onChange, clearable = false, onClean, addonBefore, addonAfter, prefix, suffix, ...genericProps } = props;
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
        if (onClean) {
            onClean();
        }
    }

    function cleanBtn() {
        return (
            <i className={`${prefixCls}-clear`} onClick={cleanHandle}>
                <FontAwesomeIcon icon={faTimesCircle} />
            </i>
        );
    }

    function renderAffix(renderStyle?: boolean) {
        if (prefix || (suffix || clearable)) {
            const _suffix = clearable && value ? cleanBtn() : suffix;
            return (
                <div className={`${prefixCls}-affix-wrapper`} style={renderStyle && style} ref={ref}>
                    {prefix && <span className={`${prefixCls}-prefix`}>{prefix}</span>}
                    {renderInput()}
                    {_suffix && <span className={`${prefixCls}-suffix`}>{_suffix}</span>}
                </div>
            );
        } else {
            return renderInput(true);
        }
    }

    function renderInput(renderStyle?: boolean) {
        if (renderStyle) {
            genericProps["style"] = style;
            genericProps["ref"] = ref;
        }
        return <input {...genericProps} type={type} {...(isControll || clearable ? { value: value || "" } : { defaultValue: value })} aria-disabled={props.disabled} className={classString} onChange={changeHandle} />;
    }

    if (addonBefore || addonAfter) {
        return (
            <div className={`${prefixCls}-group-wrapper`} style={style} ref={ref}>
                <InputGroup>
                    {addonBefore && <span className={`${prefixCls}-addon`}>{addonBefore}</span>}
                    {renderAffix()}
                    {addonAfter && <span className={`${prefixCls}-addon`}>{addonAfter}</span>}
                </InputGroup>
            </div>
        );
    } else {
        return renderAffix(true);
    }
});

export default React.memo(Input);
