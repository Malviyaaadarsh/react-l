import { useState } from 'react'
const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, description });
    setTask(copyTask);
    setTitle('');
    setDescription('');
  }
  const deleteNote = (idx) => {
      const copyTask= [...task]; 
      copyTask.splice(idx,1)
      setTask(copyTask)
  }
  return (
    <div className='h-screen  lg:flex bg-black text-white p-10'>
      {/* <div className='flex items-center justify-center gap-1 bg-blue-950 h-fit  rounded-3xl'><img src='https://i.pinimg.com/originals/b6/cd/e8/b6cde81d1c489b0e20d85a6e06c5f8f9.png' alt='notes' className='w-8 h-8' />
        <h1 className='text-3xl font-bold p-4 text-center' >Notes App</h1></div> */}
      <form onSubmit={(e) => { submitHandler(e) }} className='flex items-start lg:w-1/2 gap-4 p-10 flex-col'>
        <h1 className='text-3xl font-bold'>Add a Note</h1>
        <input type="text" placeholder="Write Heading" className='px-5 font-medium outline-none w-full py-2 border-2 rounded-2xl' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <textarea type='text' placeholder="Write Description of Note" value={description}
          onChange={(e) => { setDescription(e.target.value) }} className='px-5 font-medium outline-none w-full h-20 py-2 border-2 rounded-2xl' />
        <button className='px-5 py-2 w-full active:scale-90 bg-white text-black border-2 font-medium outline-none rounded-2xl cursor-pointer'>Add</button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-5'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5  mt-5 overflow-auto h-[90%]'>
          {task.map(function (elem, index) {
            return <div key={index} className="flex justify-between flex-col items-start relative h-62 py-8 px-4 w-50 bg-cover rounded-2xl bg-[url('https://cdn.pixabay.com/photo/2013/07/13/11/55/notes-158958_960_720.png')] text-black p-4">
              <div>
                <h3 className={'leading-tight text-xl font-bold p-1'} >{elem.title}</h3>
                <p className={'mt-4 leading-tight font-medium text-gray-700'}>{elem.description}</p> </div>
              <button onClick={()=>{
                deleteNote(index)
              }} className='w-full text-xs cursor-pointer active:scale-95 font-bold bg-red-500 rounded-xl p-1'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
export default App
