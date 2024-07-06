import './profile.scss'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="view">
            <div className="info">
                <div className="topInfo">
                     <img src="public\hazem.PNG" alt="" />
                    <h1>Hazem Mohsen</h1>
                    <button>Edit Profile</button>
                </div>
                <div className="details">
                    <div className="item" >
                        <span className="itemTitle">Username:</span>
                        <span className='itemValue'>Hazemmohsen188</span>
                    </div>
                    <div className="item" >
                        <span className="itemTitle">Fullname:</span>
                        <span className='itemValue'>Hazem Mohsen</span>
                    </div>
                    <div className="item" >
                        <span className="itemTitle">Email:</span>
                        <span className='itemValue'>Hazemmohsen188@gmail.com</span>
                    </div>
                    <div className="item" >
                        <span className="itemTitle">phone:</span>
                        <span className='itemValue'>010 048 234 21</span>
                    </div>
                    <div className="item" >
                        <span className="itemTitle">status:</span>
                        <span className='itemValueo'>Online</span>
                    </div>
                   
                </div>
            </div>
           
        </div>
        <div className="activites">
            <h2>Latest Avtivities</h2>
            
                 <ul>
               
                 <li >
                    <div>   
                       <p>You logged out</p> 
                       <time>1 day ago</time>
                    </div>
                </li> 
                <li >
                    <div>   
                       <p>You logged in</p> 
                       <time>1 day ago</time>
                    </div>
                </li>
                <li >
                    <div>   
                       <p>You delete a user</p> 
                       <time>3 day ago</time>
                    </div>
                </li>
                <li >
                    <div>   
                       <p>You added a user</p> 
                       <time>3 day ago</time>
                    </div>
                </li>
                <li >
                    <div>   
                       <p>You logged out</p> 
                       <time>5 day ago</time>
                    </div>
                </li>
                <li >
                    <div>   
                       <p>You logged in</p> 
                       <time>5 day ago</time>
                    </div>
                </li>
               
              
                 </ul>
            
        </div>
    </div>
  )
}

export default Profile