import { TodoActionTypes } from '../shared/enum/todo-action-type.enum';
import {ActionParent} from '../actions/todo.actions';
import {Todo} from '../models/Todo';

export const initialState: Todo[] = [
    {title:'Todo1'},
    {title:'Todo2'},
    {title:'Todo3'}
];

export function TodoReducer(state = initialState,action : ActionParent){
    switch(action.type){
        case TodoActionTypes.Add:
            return [...state,action.payload]
        case TodoActionTypes.Remove:
            let stateData = [...state]; 
            [...stateData.splice(action.payload,1)]
            return [...stateData]
        default: return state;
    }
}