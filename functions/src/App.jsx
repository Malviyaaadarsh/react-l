
const App = () => {
  function btnclicked() {
    console.log("button clicked")
  }
  function mouseentered() {
    console.log("mouse entered")
  }
  function inputchanged() {
    console.log("User is typing something")
  }
  const pagescroll = (elem)=>{
  if(elem>0){console.log('forward scrolling...')
  }
else{
  console.log('backward scrolling.....')
}
}
  return (
    <div>
      <button onMouseEnter={mouseentered} onClick={btnclicked}>Single-click</button>
      <button onDoubleClick={function () {
        console.log("button double clicked")
      }}>Double-click</button>

    <input type='text' placeholder='Enter Name...' onChange={inputchanged}/>
    <input type='text' placeholder='Enter Something....' onChange={function(elem){
      console.log(elem)
      console.log(elem.target.value)
    }}/>



    <div  onMouseMove={(elem)=>{
      console.log(elem.clientX)
    }} className="box"></div>




<div onWheel={(elem)=>{pagescroll(elem.deltaY)}}>
    <div className="page1"></div>
    <div className="page2"></div>
    <div className="page3"></div>
</div>







    </div>
  )
}
export default App