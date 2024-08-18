
const Preloader = () => {

  return (
    <div className="flex justify-center pre h-screen items-center ">
      <div className="loader JS_on">
        <span className="binary"></span>
        <span className="binary"></span>
        <span className="getting-there text-xl mt-2 font-bold">LOADING ...</span>
      </div>
    </div>
  )
}

export default Preloader