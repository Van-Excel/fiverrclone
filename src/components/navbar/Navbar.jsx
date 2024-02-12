
import './Navbar.scss'




export default function Navbar() {
  return (
    <div className='navbar'> 
   
    <div className="container">
        <div className="logo">
            <span className='text'>fiverr</span>
            <span className='dot'>.</span>

        </div>
        <div className="links">
            <span>Fiverr Business</span>
        
        <span>Explore</span>
        <span>English</span>
        <span>Become a seller</span>
        <span>Sign in</span>
        <button className='btn-join'>Join</button>

        

        </div>
    </div>
    
    </div>
  )
}
