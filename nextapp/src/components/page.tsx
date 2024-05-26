import Navbar from "./navbar"
import { useAccount } from "wagmi"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Loader from "./loader"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./footer"

export default function Page({ children, background, noLoading }: any) {
    const { isConnected } = useAccount()
    const router = useRouter()
    const [connected, setConnected] = useState(false)

    useEffect(() => {
        setConnected(isConnected)
    }, [isConnected])

    useEffect(() => {
        if (!isConnected && !noLoading) {
            setTimeout(() => {
                router.push("/")
            }, 5000)
        }
    }, [isConnected, router, noLoading])

    return <div>
                <Navbar />
<div className="min-h-screen sm:px-20 p-5 text-white/90 select-none" suppressHydrationWarning
        style={{ color:"black", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
        <ToastContainer theme="dark" />
        <main  className={`p-5 my-10 mb-0 pb-0 rounded-2xl flex flex-col items-center ${background ? " ring-4 ring-white/20" : ""}`} suppressHydrationWarning>
            {(connected || noLoading) ? children : <Loader />}
            {/* {children} */}
        </main>
        </div>
<Footer/>
    </div>
}