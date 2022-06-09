// import React, React-redux
import React from 'react'
import { useSelector } from 'react-redux';
// import Style
import '../App.css';
// import components
import CardBox from './CardBox';

// FB에 저장된 게시글 Home에 카드로 표시
 function Card() {

    const textList = useSelector(state => state.post.list);
    
  return (
    <>
        { textList.map((v,i) => {
          return <CardBox 
                    key = {v.id} 
                    id = {v.id} 
                    nickname ={v.nickname} 
                    text={v.text} 
                    img_url={v.img_url} 
                    index={i}/>
          })}
    </>
  )
}


export default Card;