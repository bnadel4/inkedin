import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new comment data to the parent component
    onSubmit(comment);
    setComment('');
  };

  return (
    <div>
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your comment"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;


// const CommentForm = ({ thoughtId }) => {
//   const [commentText, setCommentText] = useState('');
//   const [characterCount, setCharacterCount] = useState(0);

//   const [addComment, { error }] = useMutation(ADD_COMMENT);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addComment({
//         variables: {
//           thoughtId,
//           commentText,
//           commentAuthor: Auth.getProfile().data.username,
//         },
//       });

//       setCommentText('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'commentText' && value.length <= 280) {
//       setCommentText(value);
//       setCharacterCount(value.length);
//     }
//   };

  // return (
  //   <div>
  //     {/* <h4>What are your thoughts on this thought?</h4>

//       {Auth.loggedIn() ? (
//         <>
//           <p
//             className={`m-0 ${
//               characterCount === 280 || error ? 'text-danger' : ''
//             }`}
//           >
//             Character Count: {characterCount}/280
//             {error && <span className="ml-2">{error.message}</span>}
//           </p>
//           <form
//             className="flex-row justify-center justify-space-between-md align-center"
//             onSubmit={handleFormSubmit}
//           >
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="commentText"
//                 placeholder="Add your comment..."
//                 value={commentText}
//                 className="form-input w-100"
//                 style={{ lineHeight: '1.5', resize: 'vertical' }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <div className="col-12 col-lg-3">
//               <button className="btn btn-primary btn-block py-3" type="submit">
//                 Add Comment
//               </button>
//             </div>
//           </form>
//         </>
//       ) : (
//         <p>
//           You need to be logged in to share your thoughts. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )} */}
//     </div>
//   );
// };
