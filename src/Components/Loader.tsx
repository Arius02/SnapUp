import loaderSVG from "../assets/images/loader.svg"

const Loader = () => {
  return (
    <div className="flex justify-center h-screen">
      <img src={loaderSVG} className="w-44" alt="loader" />
    </div>
    )
}

export default Loader