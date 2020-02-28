import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    const author = 'Danny'
    return (
        
     <div className="ui container comments">
         <ApprovalCard>Hello How are you?</ApprovalCard>
         <ApprovalCard>
            <CommentDetail 
                author="daniel" 
                timeAgo={"Today at 4:45PM"} 
                commentText={"Not bad at all"} 
                userImage={faker.image.avatar()} 
            />  
       </ApprovalCard>
       <ApprovalCard>
        <CommentDetail 
            author= {"dan"} 
            timeAgo={"Today at 5:45PM"} 
            commentText={"Not bad at"} 
            userImage={faker.image.avatar()} 
        />
       </ApprovalCard>
         <ApprovalCard>
            <CommentDetail 
                author= {author} 
                timeAgo={"Today at 6:45PM"} 
                commentText={"Notat all"} 
                userImage={faker.image.avatar()} 
            />
        </ApprovalCard>
  
       
     </div>
    )
}
ReactDom.render(<App />, document.getElementById('root'))