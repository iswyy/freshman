import React, { useEffect, useState } from 'react';
import RatioChart from './RatioChart';
import { useSelector } from 'react-redux';
import { getSignIn } from '@/api/web';
import './index.css'


const MaleRatio: React.FC = () => {
  const count = useSelector((state: any) => state.counter.value);
  const [boy, setBoy] = useState(0)
  const [girl, setGril] = useState(0)
  const [boyalnum, setBoyalnum] = useState(0)
  const [girlalnum, setGrilalnum] = useState(0)

  useEffect(() => {
    getSignIn().then((res) => {
      console.log(res);
      if (res.code === 200) {
        setBoy(res.data.boy_percent);
        // setBoyalnum(res.data.boy_already);
        setGril(res.data.girl_percent);
        // setGrilalnum(res.data.girl_already);
      }
    }).catch(res => { console.log(res) }
    )
  }, [count])

  return (< >
    <div className='titleName'>男女生报到率</div>
    <div className='pie'>
      <RatioChart value={boy}></RatioChart>
      <RatioChart value={girl}></RatioChart>
    </div>
    <div className='tip'>
      <div className='boy'>
        <p>男生报到率</p>
        {/* <p>{boyalnum}人</p> */}
      </div>
      <div className='girl'>
        <p>女生报到率</p>
        {/* <p>{girlalnum}人</p> */}
      </div>
    </div>
  </>)
}
export default MaleRatio