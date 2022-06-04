import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "../../shared/firebase";

/* 1단계 액션 타입 만들기*/
const LOAD = 'post/LOAD';
const ADD = 'post/ADD'

/* 2단계 : 액션 생성함수 만들기 */
export const load = (data) => {
    return ({type: LOAD, data})
}
export const add = (data) => {
    return ({ type: ADD, data : data})
}

/* 3단계  미들웨어*/
export const addFB = (user) => {
    return async function (dispatch) {
        const userRef = await addDoc(collection(db, "users"), user);
        const  _user = await getDoc(userRef);
        const user_data = {id: _user.id, ..._user.data()};
        dispatch(add(user_data));
    }
}



/*4단계 초기 상태 선언*/
const initialState = {
    list : []
}

/*5단계 : 리듀서 선언*/
export default function post (state = initialState, action) {
    switch (action.type) {
        case LOAD : {
            return 
        }
        case ADD : {
            return {list : [...state.list]}
        }
        default: {
            return state;
        }
    }
}