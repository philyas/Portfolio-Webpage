import profileimage from './assets/profile.png'
import headerimage from './assets/header.png'


export default function Profile(){
    return(
        <div style={{ width:'100%', height:400, display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center', flexDirection:'column'}}>
          
          <div style={{width:400, height:400, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img width={400} src={headerimage}></img>
            </div>
          
            <div style={{width:300, background:'radial-gradient(rgb(255, 255, 255), rgb(223, 231, 236))', borderRadius:1000, height:300, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img width={320} height={320} src={profileimage}></img>
            </div>
        </div>
     
    )
}