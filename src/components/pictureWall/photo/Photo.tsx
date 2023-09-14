import { useEffect, useState } from 'react';
import './photo.css'
import { Carousel } from 'antd';
import { useRef } from 'react';
import { debug, log } from 'console';

const contentStyle: React.CSSProperties = {
  height: '100%',
  color: '#fff',
  background: '#364d79',
};
const imgerrorfun = (event: any) => {
  event.target.src = "src/assets/images/pivtureWall/012.jpg";
}
const Photo = (props: any) => {
  // let peoples = props.students
  let arr: any = props.students || []
  let teacherArr=props.downTeacherDataToWater||[]
  let leaderArr = teacherArr.filter((item:any)=>{
      // 领导显示逻辑
      // return item.identify === 3
      // 领导不显示
      return false
  })
  console.log('##############',leaderArr.length);
  
  // if (leaderArr.length > 0 ){

  // }
  if (props.downStudentDataToWater) {
    arr.push(props.downStudentDataToWater)
  }
  let peples = []

  for (let i = arr.length - 3; i < arr.length; i++) {
    if (arr[i]) {
      peples.push(arr[i])
    } else {
      peples.push({
        name: "等你来", image: "src/assets/images/pivtureWall/012.jpg", courWord: '崇德尚能，知行合一'
      })
    }
  }
  // console.log(props, arr, peples);


  // const peples = [
  //   {
  //     name: "猫咪猫", age: '18', sex: "女", zy: "计算机科学与技术", className: "计科231", word: "更喜欢狗是吗，是我和小橘不够可爱拴不住你的心吗",
  //     img: "src/assets/images/pivtureWall/waterfallFlow/bosx.jpg"
  //   }, {
  //     name: "猫咪", age: '20', sex: "男", zy: "计算机科学与技术", className: "计科231", word: "更喜欢狗是吗",
  //     img: "src/assets/images/pivtureWall/waterfallFlow/bosx.jpg"
  //   }
  // ]
  const photo = useRef(null)
  let lastTeacher= leaderArr.length > 0 ? [leaderArr[leaderArr.length-1],leaderArr[leaderArr.length-1],leaderArr[leaderArr.length-1]] : []
  let teacherlist = lastTeacher.map(person => {
    return (
      <div className='carousel-item' >
          <div className='photo-message'>
            <div style={{ display: 'flex', alignItems: 'end', textAlign: 'end' }}>
              <div className='name' style={{ textAlign: 'end' }}>
                <span>{person.name}</span>
              </div>
            </div>
            <div className={`allMsg `}>
              <div className='msg' style={{ fontSize: '2.5rem' }}>{person.courWord}</div>
            </div>
          </div>
          <img src={person.image} onError={imgerrorfun} className='photoimg' width='50%'></img>
          <div className='bg'></div>
        </div>
    )
  })
  // let temp = peples.filter(item=> {
  //   return item.id == 
  // })
  let peoplelist = peples.map(person => {
    if (person.class) {
      return (
        <div className='carousel-item' >
          <div className='photo-message'>
            <div className='ranking' style={{ color: '#ffe968' }}>{person.place ? `No.${person.place}` : ''}</div>
            <div style={{ display: 'flex', alignItems: 'end', textAlign: 'end' }}>
              <div className='name' style={{ textAlign: 'end' }}>
                <span>{person.name}</span>
              </div>
              <div className='msg' style={{ fontSize: '2.5rem', marginLeft: '10px', textAlign: 'end', lineHeight: '60px' }}>{person.class}</div>
            </div>
            <div className={`allMsg `}>
              <div className='msg' style={{ fontSize: '3rem' }}>{person.courWord}</div>
            </div>
          </div>
          <img src={person.image} onError={imgerrorfun} className='photoimg' width='50%'></img>
          <div className='bg'></div>
        </div>)
    } else {
      return (
        <div className='carousel-item' >
          <div className='photo-message text-msg'>
            <div className={`allMsg `}><div className='name' style={{ textAlign: 'end' }}>
              <span>{person.name}</span>
            </div>
              <div className='msg' style={{ fontSize: '2.5rem' }}>{person.courWord}</div>
            </div>
          </div>
          <img src={person.image} className='photoimg' onError={imgerrorfun} style={{ objectFit: 'fill' }} width='50%'>
          </img> <div className='bg'></div>
        </div>)
    }

  })
  useEffect(() => {
    // console.log(document.getElementsByClassName('car')[0].clientHeight, document.getElementsByClassName('photoContent')[0].clientHeight);
    // document.getElementsByClassName('car')[0].style.height = document.getElementsByClassName('photoContent')[0].clientHeight - 20 + 'px'
  }, [])



  return (
    <div className="photoContent" ref={photo}>

      <div className='car' style={{ overflow: 'hidden' }}>
        <Carousel autoplay className='carousel' dots={false} autoplaySpeed={8000}>
          {leaderArr.length > 0 ? teacherlist : peoplelist}
        </Carousel>
      </div>
    </div>
  );
}
export default Photo;