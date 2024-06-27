import profileimage from './assets/profile.png'
import headerimage from './assets/header.png'


export default function Profile(){
    return(
        <div style={{ width:'100%', height:'auto', display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center', flexDirection:'column'}}>
          
          <div style={{ width:300, height:'auto', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img width={300} src={headerimage}></img>
            </div>
          
            <div style={{width:330, height:330, overflow:'hidden', position:'relative',  borderRadius:1000, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img style={{ position:'absolute', zIndex:2 }} width={330} height={'auto'} src={profileimage}></img>
                    <div style={{width:280, height:280, marginTop:58, position:'relative', background:'radial-gradient(rgb(255, 255, 255), rgb(223, 231, 236))', borderRadius:1000, display:'flex', alignItems:'center', justifyContent:'center'}}>
                 
                 </div>
            </div>
        </div>
     
    )
}