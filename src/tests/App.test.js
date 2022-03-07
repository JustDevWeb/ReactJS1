import Routers from "../pages/Routers";
import {render,screen} from "@testing-library/react";

test('render some text',() => {
    render(<Routers />);
    const textReg = /Great Text/i;
    const textElement = screen.getByText(textReg);
    expect(textElement).toBeInTheDocument();
})