import { shallow } from 'enzyme';
import { findByTestAtrr, checkPropsErr } from '../../utils';
import Headline from './index';

const setUp = (props={}) => {
    let component = shallow(<Headline {...props}/>)
    return component
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('should not throw a warninng', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Ashima',
                    lName: 'Walia',
                    age: 24,
                    onlineStatus: false
                }]
            }
    
            const propsErr = checkPropsErr(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            component = setUp({
                header: 'Test Heading',
                desc: 'Test Desc'
            })
        })

        it('should render without errors', () => {
            let wrapper = findByTestAtrr(component, 'HeadlineComponent');
            expect(wrapper.length).toBe(1);
        })

        it('should have h1', () => {
            let heading = findByTestAtrr(component, 'header');
            expect(heading.length).toBe(1);
        })

        it('should have a description', () => {
            let desc = findByTestAtrr(component, 'desc');
            expect(desc.length).toBe(1);
        })
    })

    describe('Do not have props', () => {
        let component;
        beforeEach(() => {
            component = setUp()
        })

        it('should not render', () => {
            let wrapper = findByTestAtrr(component, 'HeadlineComponent');
            expect(wrapper.length).toBe(0);
        })
    })

})