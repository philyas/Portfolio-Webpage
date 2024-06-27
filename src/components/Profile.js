import profileimage from './assets/profile.png'
import headerimage from './assets/header.png'
import profileimg1 from './assets/profileimg1.png'


export default function Profile(){
    return(
        <div style={{ width:'100%', height:'auto', display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center', flexDirection:'column'}}>
          
          <div style={{ width:330, height:'auto', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img style={{background:'red'}} width={330} src={headerimage}></img>
            </div>
          
            <div style={{width:330, height:330, overflow:'hidden', position:'relative',  borderRadius:300, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img style={{ position:'absolute', zIndex:2 }} width={290} height={'auto'} src={profileimg1}></img>
                    <div style={{width:280, height:280, marginTop:70, position:'relative', background:'radial-gradient(rgb(255, 255, 255), rgb(222, 231, 236))', borderRadius:1000, display:'flex', alignItems:'center', justifyContent:'center'}}>
                 
                 </div>
            </div>
        </div>
     
    )
}