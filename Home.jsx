import React,{useState} from 'react'

const Home = ({data , validation }) => {
  const [position , setposition] = useState(0)

   let checkdata = (e,index) => {
     setposition(index)
     validation(e)
   }
// INCLUDE ALL THESE IN INDEX CSS FILE

//    .color{
//     background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
// }

// .custom_translate0{
//     transform: translateX(0rem);
// }
// .custom_translate1{
//     transform: translateX(8rem);
// }
// .custom_translate2{
//     transform: translateX(16rem);
// }
// .custom_translate3{
//     transform: translateX(24rem);
// }
// .custom_translate4{
//     transform: translateX(32rem);
// }
// .custom_translate5{
//     transform: translateX(40rem);
// }
// .custom_translate6{
//     transform: translateX(48rem);
// }



  return (
    <div className="flex justify-center items-center h-[100vh] ">
    
  <div className={`flex items-center bg-white h-[3rem] rounded-full overflow-x-hidden relative justify-around`}>
    {data.map((e,index) => {
    
      return(
        <span key={index} onClick={() => checkdata(e,index)} className={`bg-transparent z-10  text-black w-[8rem] flex items-center justify-center font-semibold cursor-pointer ${position == index ? 'text-white' : ''}`}>{e}</span>
        )
      })}
      <span className={`absolute left-[.2rem] w-[7.6rem] rounded-full color z-0 h-[2.8rem] flex items-center transition-all custom_translate${position}`}></span>
    </div>

    </div>
  )
}

export default Home
