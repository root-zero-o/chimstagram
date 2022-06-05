// import Firebase
import { getDoc, collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../shared/firebase";
import { ref, deleteObject } from "firebase/storage";

// 액션 타입
const ADD_IMG = 'post/ADD_IMG';
const ADD_TEXT = 'post/ADD_TEXT';
const LOAD_TEXT = 'post/LOAD_TEXT';
const DELETE_POST = 'post/DELETE_POST'

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

export const deletePost = (id) => {
    return ({type: DELETE_POST, id})
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
// 작성된 글 삭제하기
export const deleteFB = (id) => {
    return async function(dispatch){
        const docRef = doc(db, "post", id);
        await deleteDoc(docRef);
        dispatch(deletePost(id))
    }
}
// 업로드된 파일 삭제하기
export const deleteFileFB = (url) => {
    return async function(dispatch){
        const deleteRef = ref(storage, url)
        await deleteObject(deleteRef)
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
        case DELETE_POST : {
            return {list: state.list.filter(value => value.id !== action.id)}
        }
        default: {
            return state;
        }
    }
};

