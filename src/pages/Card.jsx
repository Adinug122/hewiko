
import webImage from "../assets/web.png";
import appImage from "../assets/app.png";
import uiImage from "../assets/ui.png";

export default function Card() {
  return (
<div  className=''>

<div className='max-w-7xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-4 md:gap-0 justify-center '>
<div className="max-w-sm p-6 rounded-xl shadow-lg bg-gray-800  border border-slate-700 transition-colors hover:border-primary">
  <div className="flex justify-center items-center mb-4">
  <img src={webImage} alt="" />
  </div>
  <h3 className="text-2xl font-bold text-center text-white mb-2">Web Dev</h3>
  <p className=" dark:text-gray-300">High-performance scalable applications.</p>
</div>
<div className="max-w-sm p-6 rounded-xl shadow-lg bg-gray-800  border border-slate-700  transition-colors hover:border-primary">
  <div className="flex justify-center items-center mb-4">
  <img src={appImage} alt="" />
  </div>
  <h3 className="text-2xl font-bold text-center text-white mb-2">App Dev</h3>
  <p className=" dark:text-gray-300">Native-feel cross-platform experiences.</p>
</div>
<div className="max-w-sm p-6 rounded-xl shadow-lg bg-gray-800  border border-slate-700  transition-colors hover:border-primary">
  <div className="flex justify-center items-center mb-4">
  <img src={uiImage} alt="" />
  </div>
  <h3 className="text-2xl font-bold text-center text-white mb-2">UI Dev</h3>
  <p className=" dark:text-gray-300">Human-centric digital interfaces.</p>
</div>

</div>
</div>
  )
}
