import Single from '../../componenets/single/Single'
import { singleUser } from '../../data'
import './user.scss'

const user = () => {
  return (
    <div className='user-s'>
        <Single {...singleUser}/>
    </div>
  )
}

export default user