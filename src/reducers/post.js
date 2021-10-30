import{UPDATE_POSTS} from '../actions/action_types';
export default function post(state=[],action){
    if(action.type===UPDATE_POSTS){
        return action.posts;
    }
    return state;
}