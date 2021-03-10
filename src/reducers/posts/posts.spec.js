import { types } from '../../actions/types';
import PostsReducer from './reducer';

describe('Posts Reducer', () => {
    it('should return default state if no type', () => {
        const newState = PostsReducer(undefined, {});
        expect(newState).toEqual([]);
    })

    it('should return new state if type received', () => {
        const posts = [{ title: 1 }, { title: 12 }, { title: 13 }];
        const newState = PostsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    })
})