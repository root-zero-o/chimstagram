import { collection, addDoc, getDoc, getDocs, where, query } from "firebase/firestore";
import { db } from "../../shared/firebase";

/* 1단계 액션 타입 만들기*/
const LOAD_NICKNAME = 'user/LOAD_NICKNAME';
const ADD_USER = 'user/ADD'
const LOAD_ALL_USER = 'user/LOAD_ALL_USER'


/* 2단계 : 액션 생성함수 만들기 */
export const loadNickname = (payload) => {
    return ({type: LOAD_NICKNAME, payload})
}

export const add = (payload) => {
    return ({ type: ADD_USER, payload})
}

export const loadAllUser  = (payload) => {
    return ({ type: LOAD_ALL_USER, payload})
}

/* 3단계  미들웨어*/
export const loadNicknameFB = (user) => {
    return async function (dispatch) {
        const user_docs = await getDocs(query(
            collection(db, "users"), where("email", "==", user.user.email)
        ));

        user_docs.forEach(value => {
            const user_nickname = value.data().nickname;
            window.localStorage.setItem('nickname', user_nickname)
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

export const loadAllUserFB = () => {
    return async function (dispatch) {
        const user_data = await getDocs(collection(db,"users"));
        let user_list = [];
        user_data.forEach((doc) => {
            user_list.push({id: doc.id, ...doc.data()})
        });
        dispatch(loadAllUser(user_list));
    }
}

/*4단계 초기 상태 선언*/
const initialState = {
    list : [],
    nickname:"",
    is_login: false
}

/*5단계 : 리듀서 선언*/
export default function user (state = initialState, action) {
    switch (action.type) {
        case LOAD_NICKNAME : {
            return {nickname: action.payload, is_login: true, list: [...state.list]}
        }
        case ADD_USER : {
            return {...state, list: [...state.list]}
        }
        case LOAD_ALL_USER : {
            return {...state, list: action.payload}
        }
        default: {
            return state;
        }
    }
}