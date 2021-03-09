import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils';
import Headline from './index';

const setUp = (props={}) => {
    let component = shallow(<Headline {...props}/>)
    return component
}

describe('Headline Component', () => {

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