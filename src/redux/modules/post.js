/* 1단계 액션 타입 만들기*/

const LOAD = 'post/LOAD';

/* 2단계 : 액션 생성함수 만들기 */
export const load = (data) => {
    return {type: LOAD, data}
}

/* 3단계  미들웨어*/

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
        default: {
            return state;
        }
    }
}