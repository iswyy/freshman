import './index.css'
interface students {
  name: string,
  text: string,
  img: string,
}
const arr: students[] = [
  { name: '马忠鹏', text: '记忆中', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' },
  { name: '马忠鹏', text: '记忆中,有很多重要的事情,都发生在真天,但没有哪个真天像今天-样', img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.f9egkDcw9T4QHxpVwwHrKQHaI4?pid=ImgDet&rs=1' }
]
const Barrage = () => {
  const barrageOutlength = 360 * arr.length;

  return <div className="barrageOutBox" style={{ width: barrageOutlength, animation: 'scrollLeft 40s linear infinite' }}>
    {arr.map((item) => (
      <div className="barrageContent" style={{ marginTop:100+Math.floor(Math.random() * 190) }}>
        <div className='item-img'><img src={item.img} width='40px' height='40px' alt="" /></div>
        <div className='item-text'>{item.text}</div>
      </div>
    ))}
  </div>;
}
export default Barrage;