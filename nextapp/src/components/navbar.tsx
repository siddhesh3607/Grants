import * as fonts from "@/utils/fonts";
import Link from "next/link";
import { MdDashboard as Dashboard } from "react-icons/md"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    return <nav style={{paddingLeft:'40px', paddingTop:'22px', paddingRight:'40px'}} className="bg-white/40 z-10 relative w-full rounded-2xl ring-4 ring-white/20 mx-auto p-3 flex sm:flex-row flex-col gap-4 justify-between items-center">
        {/* <Image src={gitravenLogo} alt="logo" className="invert opacity-95 ml-3" height={35} /> */}
        <Link href="/"><span style={{fontSize: "26px"}}><FontAwesomeIcon icon={faBug} style={{color:"red"}} /></span><strong style={{fontSize:"xx-large", color:'black'}}> GrantBounty Connect</strong></Link>
        <div className="flex gap-5 justify-center items-center">
          <Link href="/grants" ><strong>Grants</strong></Link>
            <Link href="/bounty" ><strong> Bounty</strong></Link>
            <Link href="/contactus" ><strong>Contact Us</strong></Link>
              <Link href="/dashboard" ><strong>Dashbaord</strong></Link>
            <w3m-button loadingLabel="hol' up" size="md" />
          
        </div>
    </nav>
}