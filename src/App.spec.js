import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from './utils';
import App from './App';

const setup = (initialStore={}) => {
    let store = testStore(initialStore);
    let wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialStore = {
            posts: [{
                title: 'Some Title 1',
                body: 'Some Body 1'
            }, {
                title: 'Some Title 2',
                body: 'Some Body 2'
            }, {
                title: 'Some Title 3',
                body: 'Some Body 3'
            }]
        }

        wrapper = setup(initialStore);
    })


    it('should render without errors', () => {
        let component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })

    it('updateState should update state as expected', () => {
        let classInstance = wrapper.instance();
        classInstance.updateState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })

    it('example_returnValue should return value as expected', () => {
        let classInstance = wrapper.instance();
        const newValue = classInstance.example_returnValue(6);
        expect(newValue).toBe(7);
    })
})