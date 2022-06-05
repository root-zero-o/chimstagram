// import Firebase
import { getDoc, collection, addDoc, getDocs } from "firebase/firestore";
import { db, storage } from "../../shared/firebase";
import user from "./user";


// 액션 타입
const ADD_IMG = 'post/ADD_IMG';
const ADD_TEXT = 'post/ADD_TEXT';
const LOAD_TEXT = 'post/LOAD_TEXT';

// 액션 생성함수
export const addImg = (payload) => {
    return ({type: ADD_IMG, payload})
}

export const addText = (payload) => {
    return ({type: ADD_TEXT, payload})
}

export const loadText = (payload) => {
    return ({type: LOAD_TEXT, payload});
}

// 미들웨어   
// 작성한 글 FB에 저장
export const addTextFB = (text) => {
    return async function(dispatch){
        const textRef = await addDoc(collection(db, "post"), text);
        const _text = await getDoc(textRef);
        const text_data = {id: _text.id, email: text.email, nickname: text.nickname, ..._text.data()};
        dispatch(addText(text_data));
    } 
}

// 작성된 글 불러오기
export const loadTextFB = () => {
    return async function(dispatch, getState){
        const text_data = await getDocs(collection(db, "post"));
        const state = getState();
        let text_list = [];
        text_data.forEach((doc) => {
            text_list.push({id: doc.id, ...doc.data()});
        });
        dispatch(loadText(text_list))
    }
}
// 초기 state
const initialState = {
    list: [],
    is_login: false
}

// 리듀서
export default function post (state = initialState, action={}) {
    switch (action.type) {
        case ADD_IMG : {
            return {list: [...state.list], is_login: true}
        }
        case ADD_TEXT : {
            return {list: [...state.list], is_login: true}
        }
        case LOAD_TEXT : {
            return {list: action.payload}
        }
        default: {
            return state;
        }
    }
};

