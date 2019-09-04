export type TextAreaSize = { minRows: number; maxRows: number };

export interface InputGenericProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * ID
     */
    id?: string;
    /**
     * 同原生input checkbox一样的name
     */
    name?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 值
     */
    value?: string;
    /**
     * 默认值
     */
    defaultValue?: string;
    /**
     * 占位符文本
     */
    placeholder?: string;
    /**
     * 自动焦点
     */
    autoFocus?: boolean;
    /**
     * tabIndex
     */
    tabIndex?: number;
    /**
     * 输入框焦点事件
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * 输入框失去焦点事件
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * 键盘事件
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * 输入框change事件
     */
    onChange?: (value: string) => void;
    /**
     * 开始输入中文
     */
    onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * 输入中文完毕
     */
    onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface InputProps extends InputGenericProps {
    /**
     * 输入框类型
     */
    type?: string;
    /**
     * 是否显示清除
     */
    clearable?: boolean;
    /**
     * 清除按钮点击事件
     */
    onClean?: Function;
    /**
     * 前置标签
     */
    addonBefore?: React.ReactNode;
    /**
     * 后置标签
     */
    addonAfter?: React.ReactNode;
    /**
     * 前置图标
     */
    prefix?: React.ReactNode;
    /**
     * 后置图标
     */
    suffix?: React.ReactNode;
}

export interface InputGroupProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 是否紧凑模式
     */
    compact?: boolean;
    /**
     * 内容
     */
    children?: React.ReactNode;
}

export interface TextAreaProps extends InputGenericProps {
    /**
     * 是否自动调整尺寸
     */
    autosize?: boolean | TextAreaSize;
}
