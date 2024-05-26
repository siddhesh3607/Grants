import Page from "@/components/page"
import * as fonts from "@/utils/fonts"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"
import { useRouter } from "next/navigation"

import Profile from "@/components/dashboard/profile"
import Bounties from "@/components/dashboard/bounties"
import Bookmarks from "@/components/dashboard/bookmarks"
import Settings from "@/components/dashboard/settings"

export default function Dashboard() {
    const account = useAccount()
    const router = useRouter()
    const [tabName, setTabName] = useState("")

    useEffect(() => setTabName("Profile"), [])

    // useEffect(() => { if (!account.isConnected) router.push("/") }, [account, router])

    const TabButton = ({ text }: any) => {
        return <button className="btn btn-ghost" onClick={() => setTabName(text)}>{text}</button>
    }

    return <Page background >
        <div className="text-4xl mb-5" style={{color:"#ff5722"}}><strong>Dashboard</strong></div>
        <div className="flex flex-col sm:flex-row w-full border-t border-black/30">
            <div className="border-r border-black/30 flex flex-row sm:flex-col gap-5 p-5 overflow-scroll" style={{fontWeight:"bold", color:'#ff5722'}}>
                <TabButton text="Profile" /><hr/>
                <TabButton text="Bounties" /><hr/>
                <TabButton text="Grants" /><hr/>
                {/* <TabButton text="Settings" /><hr/> */}
            </div>
            <div className="p-5 overflow-scroll w-full">
                {tabName === "Profile" && <Profile />}
                {tabName === "Bounties" && <Bounties />}
                {tabName === "Grants" && <Bookmarks />}
                {/* {tabName === "Settings" && <Settings />} */}
            </div>
        </div>
    </Page>
}