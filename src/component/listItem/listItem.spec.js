import { shallow } from 'enzyme';
import { findByTestAtrr, checkPropsErr } from '../../utils';
import ListItem from './index';

const setUp = (props={}) => {
    let component = shallow(<ListItem {...props}/>);
    return component;
}

describe('List Item Component', () => {

    describe('Checking PropTypes', () => {
        it('should not throw a warninng', () => {
            const expectedProps = {
                title: 'Test title',
                desc: 'Test desc'
            }
    
            const propsErr = checkPropsErr(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('List Item Renders', ()=> {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Test title',
                desc: 'Test desc'
            }
            wrapper = setUp(props);
        })

        it('should render without error', () => {
            let component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        })

        it('should render a title', () => {
            let title = findByTestAtrr(wrapper, 'listItemTitle');
            expect(title.length).toBe(1);
        })

        it('should render a desc', () => {
            let desc = findByTestAtrr(wrapper, 'listItemDesc');
            expect(desc.length).toBe(1);
        })
    })

    describe('Should not Render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Test desc'
            }
            wrapper = setUp(props);
        })

        it('should render without error', () => {
            let component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        })

    })
    
})