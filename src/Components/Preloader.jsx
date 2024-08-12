
const Preloader = () => {

  return (
    <div className="flex justify-center pre h-screen items-center ">
      <div class="loader JS_on">
        <span class="binary"></span>
        <span class="binary"></span>
        <span class="getting-there text-xl mt-2 font-bold">LOADING ...</span>
      </div>
    </div>
  )
}

export default Preloader