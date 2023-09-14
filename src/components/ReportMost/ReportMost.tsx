const ReportMost = () => {
    return (
        <>
            <div className='titleName'>新生报到之最</div>
            <ul className='bestInfo'>
                <li className='bestItem'>
                    <span className='bestText'>新生最小年龄</span>
                    <span className='bestContent'>15岁</span>
                    <span className='bestNum'>1人</span>
                </li>
                <li className='bestItem'>
                    <span className='bestText'>最多同天生日</span>
                    <span className='bestContent'>3月20日</span>
                    <span className='bestNum'>6人</span>
                </li>
                <li className='bestItem'>
                    <span className='bestText'>新生最多星座</span>
                    <span className='bestContent'>巨蟹座</span>
                    <span className='bestNum'>27人</span>
                </li>
                <li className='bestItem'>
                    <span className='bestText'>新生最多地市</span>
                    <span className='bestContent'>周口市</span>
                    <span className='bestNum'>25人</span>
                </li>
                <li className='bestItem'>
                    <span className='bestText'>新生最多姓氏</span>
                    <span className='bestContent'>王</span>
                    <span className='bestNum'>32人</span>
                </li>
            </ul>
        </>
    )
}
export default ReportMost