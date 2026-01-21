import  {  useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {


const [Data, setData] = useState([])
const [index, setindex] = useState(1)
const api = async()=>{
    

    const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

        setData(responce.data)
    

   } 
   useEffect(() => {
     api()
   }, [index])
   


 

  return (
    <div className='min-h-screen w-screen bg-black text-white p-7 ' >
     <div className='min-h-3/4 w-full flex flex-wrap justify-center align-middle gap-8 pb-15  '>
       {Data.map((e)=>{    
        return <a href={e.url} className=''>
         <img className='h-80 w-110 object-cover rounded-2xl ' src={e.download_url} alt="" />
         <h3 className='text-xl lg:text-3xl p-4'>{e.author}</h3>
        </a>
      })}
     </div>
     
      <div className='w-full flex justify-center py-5 fixed bottom-0 bg-black'>
        
        <button onClick={()=>{
         if(index >1){
           setindex(index-1)
           setData([])
         }
        }} className='text-3xl bg-amber-300 px-5 py-3 rounded-2xl '>hello</button>
        <h1 className='text-3xl pt-3 px-5'>{index} Page</h1>
        <button onClick={()=>{
          setindex(index+1)
          setData([])

        }} className='text-3xl bg-amber-300 px-5 py-3 rounded-2xl '>hello</button>
      </div>
     
     
    </div>
  )
}

export default App
