import { collection, addDoc, getDoc, getDocs, where, query } from "firebase/firestore";
import { db } from "../../shared/firebase";

/* 1단계 액션 타입 만들기*/
const LOAD_NICKNAME = 'post/LOAD_NICKNAME';
const ADD_USER = 'post/ADD'


/* 2단계 : 액션 생성함수 만들기 */
export const loadNickname = (payload) => {
    return ({type: LOAD_NICKNAME, payload: payload})
}

export const add = (payload) => {
    return ({ type: ADD_USER, payload : payload})
}


/* 3단계  미들웨어*/
export const loadNicknameFB = (user) => {
    return async function (dispatch) {
        const user_docs = await getDocs(query(
            collection(db, "users"), where("email", "==", user.user.email)
        ));

        user_docs.forEach(value => {
            const user_nickname = value.data().nickname;
            dispatch(loadNickname(user_nickname));
        })
    }
}

export const addFB = (user) => {
    return async function (dispatch) {
        const userRef = await addDoc(collection(db, "users"), user);
        const  _user = await getDoc(userRef);
        const user_data = {id: _user.id, ..._user.data()};
        dispatch(add(user_data));
    }
}

export const loadUserFB = (email) => {
    return async function (dispatch) {
        const user_docs = await getDocs(query(
            collection(db, "users"), where("email", "==", email)
        ));
        user_docs.forEach(value => {
            const user_nickname = value.data().nickname;
            dispatch(loadNickname(user_nickname))
        })
    }
}


/*4단계 초기 상태 선언*/
const initialState = {
    list : [],
    nickname: "",
    is_login: false
}

/*5단계 : 리듀서 선언*/
export default function post (state = initialState, action) {
    switch (action.type) {
        case LOAD_NICKNAME : {
            return {list: [...state.list], nickname: action.payload, is_login: true}
        }
        case ADD_USER : {
            return {list : [...state.list], ...state}
        }
        default: {
            return state;
        }
    }
}