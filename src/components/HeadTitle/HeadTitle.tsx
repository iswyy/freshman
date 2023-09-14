
import React, { useState, useEffect } from 'react'
import { getNowTime } from '@/utils/formatDate';

const HeadTitle: React.FC = () => {
    const [time, setTime] = useState('')
    useEffect(() => {
        let timerid = setTimeout(() => {
            setTime(getNowTime())
        }, 1000)
        return (() => clearTimeout(timerid))
    })
    return (
        <>
            <div className="current-time">{time}</div>
            <div className="title">计算机科学与技术学院迎新实时数据</div>
            <div className="march-soft">技术支持 @三月软件</div>
        </>
    )

}
export default HeadTitle
