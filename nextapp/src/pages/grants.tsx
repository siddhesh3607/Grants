
import Page from "@/components/page"

export default function Grants() {


    return (
        <Page noLoading>
                    <h1 style={{fontSize:'35px', color:'#ff6600'}}> <strong>Grants</strong></h1>

             <div className="container">
        <div className="image-container">
            {/* <img src="https://via.placeholder.com/800x200" alt="DoraHacks Grants"> */}
        </div>
        <p>Welcome to GrantBounty Connect Grants! We support innovative projects and ideas that contribute to the advancement of technology and society.</p>
        
        <h2 style={{marginTop:'20px'}}><strong>What Are Grants?</strong></h2>
        <p><strong style={{ color: '#ff6d00', fontWeight: 900 }}><br />&quot;Grants&quot;</strong> can refer to financial assistance provided by governments, organizations, or individuals to fund specific projects, activities, or initiatives. Grants are typically awarded based on certain criteria, such as the merit of the proposed project, the organization&apos;s mission, or the needs of a particular community.

Grants can be provided for various purposes, including scientific research, education, arts and culture, community development, healthcare, environmental conservation, and more. They are often non-repayable, meaning that recipients are not required to pay back the funds, although they may be subject to certain conditions or reporting requirements.

Grants play a crucial role in supporting innovation, addressing social needs, and promoting economic development by providing resources to individuals and organizations that may not have access to other forms of funding.</p>
                
        <p style={{marginTop:'5%'}}>If you have any questions or need assistance with the grant application process, feel free to <a href="mailto:info@grantbountyconnect.com" style={{color: '#007bff'}}>contact us</a>.</p>
    </div>
            </Page>
        )
}