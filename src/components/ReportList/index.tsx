import React, { useEffect, useState, StrictMode } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { getAlready } from '@/api/web';
import { formatTime } from '@/utils/formatDate';
import './index.css'


const widths = ["30%", "30%", "40%"];
const tableHead = [

  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center', // 居中对齐
    fixed: 'left', // 固定列到左侧
  },
  {
    title: '班级',
    dataIndex: 'class',
    key: 'class',
    align: 'center', // 居中对齐
  },
  {
    title: '报到时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    align: 'center', // 居中对齐
  }
];


const pageSize = 8; // 每次添加的数据数量
// const animations = {
//   show: {
//     opacity: 1
//   },
//   hidden: {
//     opacity: 0
//   }
// }
const ReportList: React.FC = () => {
  const count = useSelector((state: any) => state.counter);
  const [tableData, setTableData] = useState([{ name: "", class: "", updatedAt: '' }]);
  // const [isScrolle, setIsScrolle] = useState(true);
  // const speed = 100
  // const wrap: any = useRef()
  // const litem1: any = useRef()
  // const litem2: any = useRef()
  // // console.log(litem1);
  // // console.log(litem1.current.clientHeight);
  // // console.log(litem1.current.scrollTop);

  // useEffect(() => {
  //   litem2.current.innerHTML = litem1.current.innerHTML
  //   // console.log(litem1.current.scrollHeight);
  //   // console.log(litem1.current.clientHeight);
  //   // console.log(litem1.current.scrollTop);

  //   let timer: any;
  //   if (isScrolle) {
  //     timer = setInterval(() => {
  //       wrap.current.scrollTop >= litem1.current.scrollHeight ? (wrap.current.scrollTop = 0) : wrap.current.scrollTop++
  //     }, speed)
  //   }
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [isScrolle])
  const [currentPage, setCurrentPage] = useState(0);
  const currentData = tableData.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
  useEffect(() => {
    console.log('我知道你发生变化啦！');
    getAlready().then((res) => {
      console.log(111, res);
      if (res.code === 200) {
        setTableData(res.data);
      }
      console.log(tableData);
    }).catch(res => { console.log(res) }
    )
  }, [count])

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(999999999, tableData);
      console.log(tableData.length, (currentPage + 1), Math.ceil(tableData.length / pageSize), (currentPage + 1) % Math.ceil(tableData.length / pageSize));
      setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(tableData.length / pageSize));
    }, 10000); // 每隔10秒切换页面
    return () => {
      clearInterval(intervalId);
    };
  }, [tableData])

  return (
    <>
      <div className='titleName'>实时报到信息榜</div>
      <div className="production-swiper-table">
        {/* 表格外层开始 */}
        <div className="table-wrapper" style={{ minHeight: "contentHeight" }}>
          {/* 表头开始 */}
          <div className="table-header">
            {tableHead.map((item, index) => {
              return <span style={{ width: widths[index] }} className="table-header-item" key={index}>{item.title}</span>
            })}
          </div>
          {/* 表头结束 */}
          {/* 表格内容开始 */}
          <div className="table-content">
            <div className="wrap">
              {/* <AnimatePresence initial={false}>
                <motion.div
                  key={currentPage}
                  variants={animations}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  transition={{
                    duration: 3
                  }}
                > */}
              <ul className='ul-item'>
                {currentData.map((item, index) => {
                  return (<li className='li-item' key={index} >
                    <span style={{ width: widths[0] }} className="li-item-content title" >{item.name}</span>
                    <span style={{ width: widths[1] }} className="li-item-content" >{item.class}</span>
                    <span style={{ width: widths[2] }} className="li-item-content" >{item.updatedAt ? formatTime(item.updatedAt) : ''}</span>
                  </li>)
                })}
              </ul >
              {/* </motion.div>
              </AnimatePresence> */}
              {/* <ul className='ul-item' ref={litem2}></ul> */}
            </div>
          </div>
        </div>
      </div>
    </ >
  )
}
export default ReportList
