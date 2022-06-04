// import Firebase
import { getDoc, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage} from "../../shared/firebase";


// 액션 타입
const ADD_IMG = 'post/ADD_IMG';
const ADD_TEXT = 'post/ADD_TEXT';

// 액션 생성함수
export const addImg = (payload) => {
    return ({type: ADD_IMG, payload: payload})
}

export const addText = (payload) => {
    return ({type: ADD_TEXT, payload:payload})
}

// 미들웨어
export const uploadFB = (event) => {
    return async function (dispatch){
        const uploaded_file = await uploadBytes(
        ref(storage, `images/${event.target.files[0].name}/`),
        event.target.files[0]
        );
    const localStorage = window.localStorage;
    const now_email = localStorage.getItem('email')
    dispatch(addImg(now_email))
    }
}

export const addTextFB = (text) => {
    return async function(dispatch){
        const textRef = await addDoc(collection(db, "post"), text);
        const _text = await getDoc(textRef);
        const text_data = {id: _text.id, email: text.email,..._text.data()};
        dispatch(addText(text_data));
    } 
}
// 초기 state
const initialState = {
    list: [],
    email: "",
    is_login: false
}

// 리듀서
export default function user (state = initialState, action) {
    switch (action.type) {
        case ADD_IMG : {
            return {list: [...state.list], email: action.payload, is_login: true}
        }
        case ADD_TEXT : {
            return state.list.concat(action.payload);
        }
        default: {
            return state;
        }
    }
}

