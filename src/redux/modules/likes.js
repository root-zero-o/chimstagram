import { getDoc, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../shared/firebase";

/* 액션 타입 */
const ADD_POST = 'likes/ADD_POST'
const LOAD_POST = 'likes/LOAD_POST'
const DELETE_POST = 'likes/DELETE_POST'
const UPDATE_LIKE = 'likes/UPDATE_LIKE'
const DELETE_LIKE = 'likes/DELETE_LIKE'

/* 액션 생성함수*/
const addPost = (payload) => {
    return ({ type: ADD_POST, payload })
}
const deletePost = (id) => {
    return ({ type: DELETE_POST, id })
}
const loadPost = (payload) => {
    return ({ type: LOAD_POST, payload})
}
const updateLike = (payload) => {
    return ({ type: UPDATE_LIKE, payload })
}
const deleteLike = () => {
    return ({ type: DELETE_LIKE })
}

/* 미들웨어 */
export const addLikePostFB = (payload) => {
    return async function(dispatch){
        const likeRef = await addDoc(collection(db, "likes"), payload);
        const _like = await getDoc(likeRef);
        const like_data = {id: _like.id, like_post: payload.like_post, like_user: payload.like_user, ..._like.data()};
        dispatch(addPost(like_data));
    } 
}

export const deleteLikePostFB = ([post]) => {
    return async function(dispatch){
        const id = post.id
        console.log(id)
        const docRef = doc(db, "likes", id);
        await deleteDoc(docRef);
        dispatch(deletePost(id))
    }
}

export const loadLikePostFB = () => {
    return async function(dispatch){
        const like_data = await getDocs(collection(db, "likes"));
        let like_list = [];
        like_data.forEach((doc) => {
            like_list.push({id: doc.id,...doc.data()});
        });
        dispatch(loadPost(like_list))
    }
}

export const updateLikeFB = (payload, nickname, index) => {
    return async function(dispatch){
        const nowPostId = payload.id
        const docRef = doc(db, "likes", nowPostId);
        await updateDoc(docRef, {
            like_post: payload.like_post,
            like_user: [...payload.like_user, nickname]
        })
        dispatch(updateLike({nickname, index}));
    }
}

export const deleteLikeFB = (id, postId, list, nickname) => {
    return async function(dispatch){
        const docRef = doc(db, "likes", id);
        await updateDoc(docRef, {
            like_post : postId,
            like_user : list.filter(value => value !== nickname)
        })
        dispatch(loadLikePostFB());
        dispatch(deleteLike());
    }
}
/* 초기 state */
const initialState = {
    list:[]
}
/* 리듀서 */
export default function post (state = initialState, action={}) {
    switch (action.type) {
        case ADD_POST : {
            console.log(action.payload)
            return {list: [...state.list, action.payload]}
        }
        case DELETE_POST : {
            return {list: state.list.filter(value => value.like_post !== action.id)}
        }
        case LOAD_POST : {
            return {list: action.payload}
        }
        case UPDATE_LIKE : {
            return {list : [...state.list]}
        }
        case DELETE_LIKE : {
            return {list : [...state.list]}
        }
        default: {
            return state;
        }
    }
};