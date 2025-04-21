// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CommentsList() {
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5000/api/comments")
//       .then((response) => {
//         setComments(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Failed to fetch comments");
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = async (commentId) => {
//     if (window.confirm("Are you sure you want to delete this comment?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/comments/${commentId}`);
//         setComments(
//           comments.map((comment) =>
//             comment._id === commentId
//               ? { ...comment, isDeleted: true }
//               : comment
//           )
//         );
//         alert("Comment soft deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete comment");
//       }
//     }
//   };

//   const handleUndelete = async (commentId) => {
//     if (window.confirm("Are you sure you want to restore this comment?")) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/comments/${commentId}/undelete`
//         );
//         setComments(
//           comments.map((comment) =>
//             comment._id === commentId
//               ? { ...comment, isDeleted: false }
//               : comment
//           )
//         );
//         alert("Comment restored successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to restore comment");
//       }
//     }
//   };

//   const handleClearReport = async (commentId) => {
//     if (
//       window.confirm(
//         "Are you sure you want to clear the report for this comment?"
//       )
//     ) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/comments/${commentId}/clear-report`
//         );
//         setComments(
//           comments.map((comment) =>
//             comment._id === commentId
//               ? { ...comment, isReported: false, reportCount: 0 }
//               : comment
//           )
//         );
//         alert("Comment report cleared successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to clear report");
//       }
//     }
//   };

//   if (loading) {
//     return <div className="text-center py-12">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center py-12">{error}</div>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Comments Management</h1>
//       {comments.length === 0 ? (
//         <p className="text-gray-600 text-center">No comments available</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-green-500 text-white">
//                 <th className="py-3 px-4 text-left">User Name</th>
//                 <th className="py-3 px-4 text-left">Comment</th>
//                 <th className="py-3 px-4 text-left">Article</th>
//                 <th className="py-3 px-4 text-left">Date</th>
//                 <th className="py-3 px-4 text-left">Report Count</th>
//                 <th className="py-3 px-4 text-left">Deleted</th>
//                 <th className="py-3 px-4 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {comments.map((comment) => (
//                 <tr
//                   key={comment._id}
//                   className={`border-b ${
//                     comment.isReported ? "bg-orange-100" : ""
//                   } ${comment.isDeleted ? "opacity-50" : ""}`}
//                 >
//                   <td className="py-3 px-4">{comment.userName}</td>
//                   <td className="py-3 px-4">
//                     {comment.content.substring(0, 100)}...
//                   </td>
//                   <td className="py-3 px-4">
//                     {comment.articleId
//                       ? comment.articleId.title
//                       : "Unknown Article"}
//                   </td>
//                   <td className="py-3 px-4">
//                     {new Date(comment.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="py-3 px-4">{comment.reportCount || 0}</td>
//                   <td className="py-3 px-4">
//                     {comment.isDeleted ? "Yes" : "No"}
//                   </td>
//                   <td className="py-3 px-4 flex space-x-2">
//                     {!comment.isDeleted && (
//                       <button
//                         onClick={() => handleDelete(comment._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     )}
//                     {comment.isDeleted && (
//                       <button
//                         onClick={() => handleUndelete(comment._id)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                       >
//                         Undelete
//                       </button>
//                     )}
//                     {comment.isReported && (
//                       <button
//                         onClick={() => handleClearReport(comment._id)}
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                       >
//                         Clear Report
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CommentsList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CommentsList() {
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5000/api/comments")
//       .then((response) => {
//         setComments(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Failed to fetch comments");
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = async (commentId) => {
//     if (window.confirm("Are you sure you want to delete this comment?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/comments/${commentId}`);
//         setComments(
//           comments.map((comment) =>
//             comment._id === commentId
//               ? { ...comment, isDeleted: true }
//               : comment
//           )
//         );
//         alert("Comment soft deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete comment");
//       }
//     }
//   };

//   const handleUndelete = async (commentId) => {
//     if (window.confirm("Are you sure you want to restore this comment?")) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/comments/${commentId}/undelete`
//         );
//         setComments(
//           comments.map((comment) =>
//             comment._id === commentId
//               ? { ...comment, isDeleted: false }
//               : comment
//           )
//         );
//         alert("Comment restored successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to restore comment");
//       }
//     }
//   };

//   const handleClearReport = async (commentId) => {
//     if (
//       window.confirm(
//         "Are you sure you want to clear the report for this comment?"
//       )
//     ) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/comments/${commentId}/clear-report`
//         );
//         setComments(
//           comments.map((comment) =>
//             comment._id === commentId
//               ? { ...comment, isReported: false, reportCount: 0 }
//               : comment
//           )
//         );
//         alert("Comment report cleared successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to clear report");
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-12">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-6 rounded text-center mx-2 my-4">
//         <p className="font-medium">{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition-colors"
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">
//         Comments Management
//       </h1>

//       {comments.length === 0 ? (
//         <div className="text-center py-12 bg-gray-50 rounded">
//           <p className="text-gray-600">No comments available</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-green-600 text-white">
//                 <th className="py-3 px-4 text-left">Status</th>
//                 <th className="py-3 px-4 text-left">Reports</th>
//                 <th className="py-3 px-4 text-left">Date</th>
//                 <th className="py-3 px-4 text-left">Article</th>
//                 <th className="py-3 px-4 text-left">Comment</th>
//                 <th className="py-3 px-4 text-left">User Name</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {comments.map((comment) => (
//                 <tr key={comment._id} className="hover:bg-gray-50">
//                   <td className="py-3 px-4">
//                     {comment.isDeleted ? (
//                       <button
//                         onClick={() => handleUndelete(comment._id)}
//                         className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
//                       >
//                         Restore
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => handleDelete(comment._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
//                       >
//                         Delete
//                       </button>
//                     )}
//                   </td>
//                   <td className="py-3 px-4">
//                     <span
//                       className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                         comment.reportCount > 0
//                           ? "bg-red-100 text-red-800"
//                           : "bg-green-100 text-green-800"
//                       }`}
//                     >
//                       {comment.reportCount || 0}
//                     </span>
//                     {comment.isReported && (
//                       <button
//                         onClick={() => handleClearReport(comment._id)}
//                         className="ml-2 bg-green-500 text-white px-2 py-0.5 rounded text-xs hover:bg-green-600 transition-colors"
//                       >
//                         Clear
//                       </button>
//                     )}
//                   </td>
//                   <td className="py-3 px-4 text-gray-600">
//                     {new Date(comment.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="py-3 px-4 text-gray-600">
//                     {comment.articleId
//                       ? comment.articleId.title
//                       : "Unknown Article"}
//                   </td>
//                   <td className="py-3 px-4 text-gray-600 max-w-xs truncate">
//                     {comment.content}
//                   </td>
//                   <td className="py-3 px-4 font-medium text-gray-800">
//                     {comment.userName}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CommentsList;




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CommentsList() {
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5000/api/comments")
//       .then((response) => {
//         setComments(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError("Failed to fetch comments");
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = async (commentId) => {
//     if (window.confirm("Are you sure you want to delete this comment?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/comments/${commentId}`);
//         setComments(
//           comments.map((comment) =>
//             comment._id === commentId
//               ? { ...comment, isDeleted: true }
//               : comment
//           )
//         );
//         alert("Comment soft deleted successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to delete comment");
//       }
//     }
//   };

//   const handleUndelete = async (commentId) => {
//     if (window.confirm("Are you sure you want to restore this comment?")) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/comments/${commentId}/undelete`
//         );
//         setComments(
//           comments.map((comment) =>
//             comment._id === commentId
//               ? { ...comment, isDeleted: false }
//               : comment
//           )
//         );
//         alert("Comment restored successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to restore comment");
//       }
//     }
//   };

//   const handleClearReport = async (commentId) => {
//     if (
//       window.confirm(
//         "Are you sure you want to clear the report for this comment?"
//       )
//     ) {
//       try {
//         await axios.post(
//           `http://localhost:5000/api/comments/${commentId}/clear-report`
//         );
//         setComments(
//           comments.map((comment) =>
//             comment._id === commentId
//               ? { ...comment, isReported: false, reportCount: 0 }
//               : comment
//           )
//         );
//         alert("Comment report cleared successfully");
//       } catch (error) {
//         console.error(error);
//         alert("Failed to clear report");
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-12">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-6 rounded text-center mx-2 my-4">
//         <p className="font-medium">{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition-colors"
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full ml-64">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">
//         Comments Management
//       </h1>

//       {comments.length === 0 ? (
//         <div className="text-center py-12 bg-gray-50 rounded">
//           <p className="text-gray-600">No comments available</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-green-600 text-white">
//                 <th className="py-3 px-4 text-left">Status</th>
//                 <th className="py-3 px-4 text-left">Reports</th>
//                 <th className="py-3 px-4 text-left">Date</th>
//                 <th className="py-3 px-4 text-left">Article</th>
//                 <th className="py-3 px-4 text-left">Comment</th>
//                 <th className="py-3 px-4 text-left">User Name</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {comments.map((comment) => (
//                 <tr key={comment._id} className="hover:bg-gray-50">
//                   <td className="py-3 px-4">
//                     {comment.isDeleted ? (
//                       <button
//                         onClick={() => handleUndelete(comment._id)}
//                         className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
//                       >
//                         Restore
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => handleDelete(comment._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
//                       >
//                         Delete
//                       </button>
//                     )}
//                   </td>
//                   <td className="py-3 px-4">
//                     <span
//                       className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                         comment.reportCount > 0
//                           ? "bg-red-100 text-red-800"
//                           : "bg-green-100 text-green-800"
//                       }`}
//                     >
//                       {comment.reportCount || 0}
//                     </span>
//                     {comment.isReported && (
//                       <button
//                         onClick={() => handleClearReport(comment._id)}
//                         className="ml-2 bg-green-500 text-white px-2 py-0.5 rounded text-xs hover:bg-green-600 transition-colors"
//                       >
//                         Clear
//                       </button>
//                     )}
//                   </td>
//                   <td className="py-3 px-4 text-gray-600">
//                     {new Date(comment.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="py-3 px-4 text-gray-600">
//                     {comment.articleId
//                       ? comment.articleId.title
//                       : "Unknown Article"}
//                   </td>
//                   <td className="py-3 px-4 text-gray-600 max-w-xs truncate">
//                     {comment.content}
//                   </td>
//                   <td className="py-3 px-4 font-medium text-gray-800">
//                     {comment.userName}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CommentsList;

import React, { useState, useEffect } from "react";
import axios from "axios";

function CommentsList() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/comments")
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch comments");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        await axios.delete(`http://localhost:5000/api/comments/${commentId}`);
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? { ...comment, isDeleted: true }
              : comment
          )
        );
        alert("Comment soft deleted successfully");
      } catch (error) {
        console.error(error);
        alert("Failed to delete comment");
      }
    }
  };

  const handleUndelete = async (commentId) => {
    if (window.confirm("Are you sure you want to restore this comment?")) {
      try {
        await axios.post(
          `http://localhost:5000/api/comments/${commentId}/undelete`
        );
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? { ...comment, isDeleted: false }
              : comment
          )
        );
        alert("Comment restored successfully");
      } catch (error) {
        console.error(error);
        alert("Failed to restore comment");
      }
    }
  };

  const handleClearReport = async (commentId) => {
    if (
      window.confirm(
        "Are you sure you want to clear the report for this comment?"
      )
    ) {
      try {
        await axios.post(
          `http://localhost:5000/api/comments/${commentId}/clear-report`
        );
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? { ...comment, isReported: false, reportCount: 0 }
              : comment
          )
        );
        alert("Comment report cleared successfully");
      } catch (error) {
        console.error(error);
        alert("Failed to clear report");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-300 text-red-800 px-3 py-4 rounded text-center mx-2 my-3">
        <p className="font-medium">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl ml-72 pt-25 p-4 mx-auto" dir="ltr">
      <h1 className="text-lg font-bold mb-3 text-gray-800">
        Comments Management
      </h1>

      {comments.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded">
          <p className="text-gray-600">No comments available</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-1.5 px-2 text-left text-xs w-[15%]">
                  User Name
                </th>
                <th className="py-1.5 px-2 text-left text-xs w-[25%]">
                  Comment
                </th>
                <th className="py-1.5 px-2 text-left text-xs w-[20%]">
                  Article
                </th>
                <th className="py-1.5 px-2 text-left text-xs w-[15%]">Date</th>
                <th className="py-1.5 px-2 text-left text-xs w-[10%]">
                  Reports
                </th>
                <th className="py-1.5 px-2 text-left text-xs w-[15%]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comments.map((comment) => (
                <tr key={comment._id} className="hover:bg-gray-50">
                  <td className="py-1.5 px-2 text-gray-600 text-xs">
                    {comment.userName || "Unknown User"}
                  </td>
                  <td className="py-1.5 px-2 text-gray-600 text-xs max-w-[150px] truncate">
                    {comment.content}
                  </td>
                  <td className="py-1.5 px-2 text-gray-600 text-xs">
                    {comment.articleId
                      ? comment.articleId.title
                      : "Unknown Article"}
                  </td>
                  <td className="py-1.5 px-2 text-gray-600 text-xs">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-1.5 px-2">
                    <span
                      className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                        comment.reportCount > 0
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {comment.reportCount || 0}
                    </span>
                    {comment.isReported && (
                      <button
                        onClick={() => handleClearReport(comment._id)}
                        className="ml-1 bg-green-500 text-white px-1.5 py-0.5 rounded text-[10px] hover:bg-green-600 transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </td>
                  <td className="py-1.5 px-2">
                    {comment.isDeleted ? (
                      <button
                        onClick={() => handleUndelete(comment._id)}
                        className="bg-gray-500 text-white px-1.5 py-0.5 rounded text-[10px] hover:bg-gray-600 transition-colors"
                      >
                        Restore
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDelete(comment._id)}
                        className="bg-red-500 text-white px-1.5 py-0.5 rounded text-[10px] hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CommentsList;