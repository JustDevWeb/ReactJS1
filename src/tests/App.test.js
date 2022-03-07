import {render,screen} from "@testing-library/react";
import ForTest from "../ForTest";

test('render some text',() => {
    render(<ForTest />);
    const textReg = /Great Text/i;
    const textElement = screen.getByText(textReg);
    expect(textElement).toBeInTheDocument();
})