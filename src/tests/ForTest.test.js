import {render} from '@testing-library/react';
import ForTest from "../ForTest";

describe('we want to test gists', () => {
    it('it is match to snapshot', () =>{
        const component = render(<ForTest/>);
        expect(component).toMatchSnapshot();
    })
})