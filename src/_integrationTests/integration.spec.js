import moxios from 'moxios';
import { testStore } from '../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts Action', () => {

    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    test('store is updated correctly', () => {
        const expectedState = [{
            title: 'Test Title 1',
            body: 'Some text'
        }, {
            title: 'Test Title 2',
            body: 'Some text'
        }, {
            title: 'Test Title 3',
            body: 'Some text'
        }]

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })
    })

})