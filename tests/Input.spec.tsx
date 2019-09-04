import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "../src";

describe("Input", () => {
    test("input disabled", () => {
        const wrapper = render(<Input disabled={true} />);
        const input = wrapper.container.querySelector("input");
        expect(input.classList.contains("xy-input-disabled")).toBeTruthy();
        expect(input.hasAttribute("disabled")).toBeTruthy();
    });

    test("placeholder", () => {
        const wrapper = render(<Input placeholder="请输入内容" />);
        const input = wrapper.getByPlaceholderText("请输入内容");
        expect(input).toBeDefined();
    });

    test("auto focus", () => {
        const fn = jest.fn();
        render(<Input autoFocus={true} onFocus={fn} />);
        expect(fn).toBeCalled();
    });

    test("input event", () => {
        const onFocus = jest.fn();
        const onBlur = jest.fn();
        const onKeyDown = jest.fn();
        const onChange = jest.fn();
        const onCompositionStart = jest.fn();
        const onCompositionEnd = jest.fn();
        const wrapper = render(
            <Input
                placeholder="请输入内容"
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                onChange={onChange}
                onCompositionStart={onCompositionStart}
                onCompositionEnd={onCompositionEnd}
            />,
        );
        const input = wrapper.getByPlaceholderText("请输入内容");

        fireEvent.focus(input);
        expect(onFocus).toBeCalled();

        fireEvent.blur(input);
        expect(onBlur).toBeCalled();

        fireEvent.keyDown(input, { keyCode: 13 });
        expect(onKeyDown).toBeCalled();

        fireEvent.change(input, { target: { value: "123" } });
        expect(onChange).toBeCalled();
        expect(onChange.mock.calls[0][0]).toBe("123");

        fireEvent.compositionStart(input);
        expect(onCompositionStart).toBeCalled();

        fireEvent.compositionEnd(input);
        expect(onCompositionEnd).toBeCalled();
    });

    test("show clear button", () => {
        const onChange = jest.fn();
        const onClean = jest.fn();
        const wrapper = render(<Input placeholder="请输入内容" onChange={onChange} onClean={onClean} clearable={true} />);

        let cleanBtn = wrapper.container.querySelector(".xy-input-clear");
        expect(cleanBtn).toBeNull();

        fireEvent.change(wrapper.getByPlaceholderText("请输入内容"), { target: { value: "123" } });

        cleanBtn = wrapper.container.querySelector(".xy-input-clear");
        fireEvent.click(cleanBtn);

        expect(onClean).toBeCalled();
        expect(onChange).toBeCalled();
        expect(onChange.mock.calls[1][0]).toBe("");

        cleanBtn = wrapper.container.querySelector(".xy-input-clear");
        expect(cleanBtn).toBeNull();
    });

    test("addonBefore and addonAfter", () => {
        const wrapper = render(<Input placeholder="请输入" addonBefore="Http://" addonAfter=".com" />);
        const input = wrapper.getByPlaceholderText("请输入");
        const addonBefore = wrapper.getByText("Http://");
        const addonAfter = wrapper.getByText(".com");

        expect(addonBefore).toBeDefined();
        expect(addonBefore.nextElementSibling).toBe(input);
        expect(addonAfter).toBeDefined();
        expect(addonAfter.previousElementSibling).toBe(input);
    });

    test("prefix and suffix", () => {
        const wrapper = render(<Input placeholder="请输入" prefix="Http://" suffix=".com" />);
        const input = wrapper.getByPlaceholderText("请输入");
        const prefix = wrapper.getByText("Http://");
        const suffix = wrapper.getByText(".com");

        expect(prefix).toBeDefined();
        expect(prefix.nextElementSibling).toBe(input);
        expect(suffix).toBeDefined();
        expect(suffix.previousElementSibling).toBe(input);
    });
});
