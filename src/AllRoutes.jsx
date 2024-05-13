import React from 'react'
import {Routes ,Route} from 'react-router-dom'
// import Questions from './Pages/Questions/Questions'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
// import Comments from './Component/RightSidebar/Comments'

// import Auth from './Pages/Auth/Auth'
// import AskQuestion from './Pages/AskQuestion/AskQuestion'
// import DisplayQuestions from './Pages/Questions/DisplayQuestions'
// import Tags from './Pages/Tags/Tags'
// import Users from './Pages/Users/Users'
// import UserProfile from "./Pages/UserProfile/UserProfile";

// DisplayQuestions
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/auth' Component={Auth} />
      {/* <Route path='/Auth' element= {<Auth/>}/>
      <Route path='/Questions' element= {<Questions/>}/>
      <Route path='/AskQuestion' element= {<AskQuestion/>}/>
      <Route path='/Questions/:id' element= {<DisplayQuestions/>}/>
      <Route path='/Tags' element= {<Tags/>}/>
      <Route path="/Users" element= {<Users/>}/>
      <Route path="/Users/:id" element={ <UserProfile/>  }/> */}
    </Routes>
  )
}

export default AllRoutes