import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div>
      {/* Render the list of posts */}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* Render the comment form for each post */}
          {/* <CommentForm postId={post.id} /> */}
          {/* Render the comments for each post */}
          {/* <CommentList comments={post.comments} /> */}
        </div>
      ))}
    </div>
  );
};

export default PostList;




// const ThoughtList = ({
//   thoughts,
//   title,
//   showTitle = true,
//   showUsername = true,
// }) => {
//   if (!thoughts.length) {
//     return <h3>No Thoughts Yet</h3>;
//   }

//   return (
//     <div>
//       {showTitle && <h3>{title}</h3>}
//       {thoughts &&
//         thoughts.map((thought) => (
//           <div key={thought._id} className="card mb-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0">
//               {showUsername ? (
//                 <Link
//                   className="text-light"
//                   to={`/profiles/${thought.thoughtAuthor}`}
//                 >
//                   {thought.thoughtAuthor} <br />
//                   <span style={{ fontSize: '1rem' }}>
//                     had this thought on {thought.createdAt}
//                   </span>
//                 </Link>
//               ) : (
//                 <>
//                   <span style={{ fontSize: '1rem' }}>
//                     You had this thought on {thought.createdAt}
//                   </span>
//                 </>
//               )}
//             </h4>
//             <div className="card-body bg-light p-2">
//               <p>{thought.thoughtText}</p>
//             </div>
//             <Link
//               className="btn btn-primary btn-block btn-squared"
//               to={`/thoughts/${thought._id}`}
//             >
//               Join the discussion on this thought.
//             </Link>
//           </div>
//         ))}
//     </div>
//   );
// };