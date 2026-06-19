import { useState } from "react"
import { heroSectionData } from "../assets/assets"

import { Link } from "react-router-dom"
import { BikeIcon, Loader2Icon, LockIcon, MailIcon, UserIcon } from "lucide-react"


const Login = () => {
  const [isLoginState, setIsLoginState]=useState(true)
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)


  const handleSubmit = async (e: React.SubmitEvent)=>{
    e.preventDefault()
    setLoading(true);
    setTimeout(()=>window.location.href = "/",1000)
  }







  return (
    <div className="min-h-screen flex">
      <div className="1g:flex 1g:w-1/2 bg-app-green relative items-center justify-center">
      <img src={heroSectionData.hero_image} alt="" className="absolute inset-0 object-cover h-full bg-center opacity-10" />
      <div className="relative text-center px-12 flex flex-col justify-center items-center h-full w-full">
        <h2 className="text-5xl font-semihold text-white text-center mb-4">Welcome back to Instacart</h2>
        <p  className="text-white/60 text-center font-serif text-3xl max-w-sm mx-auto">Fresh groceries and oraganic produce, delivered to your doorstep.</p>
      </div>
    
      </div>
      <div className="flex-1 flex flex-col justify-start items-center px-4 pt-20 pb-12 bg-app-cream min-h-screen">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
                 <BikeIcon className="sixe 8 text-app-green"/>
                 <span className="text-2xl font-semibold text-app-green">Instacart</span>
            </Link>
            <h1 className="text-2xl font-semibold text-app-green mb-2">
              {isLoginState?"Sign in to your account ": "Sign up for an account"}
            </h1>
            <p className="text-sm text-app-text-light">
              {isLoginState?"Don't have an account?":" Already have an account ?"} 
              <button className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors" onClick={()=>setIsLoginState(!isLoginState)}>
                {isLoginState?"Create one":"Sign in"}
              </button>
            </p>

          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLoginState && (
              <label className="text-sm flex flex-col gap-1.5 w-full">
                <span className="text-app-text-light">Name</span>
                <div className=" relative flex items-center h-12 w-full">
                  <UserIcon className="absolute left-3.5 top-1/2-translate-y-1/2 size-4 text-app-text-light"/>
                  <input 
                  type="text"
                  value={name} 
                  onChange={(e)=>setName(e.target.value)}
                  required 
                  placeholder="your name" 
                  className="w-full h-full pl-11 pr-4 text-sm bg-white rounded-xl border border-app-border focus:outline-none focus:border-app-green transition-all"/>

                </div>

              </label>
            )}
            <label className="text-sm flex flex-col gap-1.5 w-full">
                <span className="text-app-text-light">Email Address</span>
                <div className=" relative flex items-center h-12 w-full">
                  <MailIcon className="absolute left-3.5 top-1/2-translate-y-1/2 size-4 text-app-text-light"/>
                  <input 
                  type="text"
                  value={name} 
                  onChange={(e)=>setName(e.target.value)}
                  required 
                  placeholder="you@example.com" 
                  className="w-full h-full pl-11 pr-4 text-sm bg-white rounded-xl border border-app-border focus:outline-none focus:border-app-green transition-all"/>

                </div>

              </label>
              <label className="text-sm flex flex-col gap-1.5 w-full">
                <span className="text-app-text-light">Password</span>
                <div className=" relative flex items-center h-12 w-full">
                  <LockIcon className="absolute left-3.5 top-1/2-translate-y-1/2 size-4 text-app-text-light"/>
                  <input 
                  type="text"
                  value={name} 
                  onChange={(e)=>setName(e.target.value)}
                  required 
                  placeholder="********" 
                  className="w-full h-full pl-11 pr-4 text-sm bg-white rounded-xl border border-app-border focus:outline-none focus:border-app-green transition-all"/>

                </div>

              </label>
            <button type="submit" disabled={loading} className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50">
              {loading?<Loader2Icon className="animate-spin"/>: isLoginState?"Sign In" :"Sign Up" }
            </button>

          </form>

        </div>

      </div>
    
    

    </div>
  )
}

export default Login
