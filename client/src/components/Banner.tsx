import { TruckIcon, XIcon, ZapIcon } from "lucide-react"
import { useState } from "react"


const Banner = () => {


    const [bannerVisible,setBannerVisible] = useState(()=>{
        return sessionStorage.getItem('banner_dismissed') !=="true";
    })

    const dismissBanner =()=>{
        setBannerVisible(false)
        sessionStorage.setItem("banner_dismmissed","true")
    }
  return (
    <div>
      {bannerVisible && (
        <div className="w-full bg-app-green text-white text-xs sm:text-sm relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-center items-center gap-6">
                <div className="flex-center gap-2">
                    <TruckIcon className="size-4 shrink-0" />
                    <span className="font-medium">Free delivery on orders above $20.</span>
                </div>
                <span className="hidden sm:inline text-white/40">|</span>
                <div className="sm:flex items-center gap-2">
                    <ZapIcon className="size-3.5 fill-yellow-400 text-yellow-400 shrink-0" />
                    <span>Farm-fresh produce delivered daily</span>

                </div>
            </div>
            <button onClick={dismissBanner} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors">
                <XIcon className="size-7.5 text-white"/>
            </button>

        </div>
      )}
    </div>
  )
}

export default Banner
