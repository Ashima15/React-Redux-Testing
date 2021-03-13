import { shallow } from 'enzyme';
import { findByTestAtrr, checkPropsErr } from '../../utils';
import Button from './index';

const setUp = (props={}) => {
    let component = shallow(<Button {...props}/>);
    return component;
}

describe('Button Component', () => {

    describe('Checking PropTypes', () => {
        it('should not throw a warninng', () => {
            const expectedProps = {
                buttonText: 'Test Button Text',
                emitEvent: () => {

                }
            }
    
            const propsErr = checkPropsErr(Button, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Renders', ()=> {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttonText: 'Test Button Text',
                emitEvent: mockFunc
            }
            wrapper = setUp(props);
        })

        it('should render a button', () => {
            let button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })

        it('should render a button', () => {
            let button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        })
    })
    
})