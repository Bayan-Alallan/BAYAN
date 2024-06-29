import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


{/*const Postlist=({posts,name,DeleteAction})=>{
    return(
    <div className="container">
            <h1>name</h1>
             <table className="table">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Title</th>
                      <th scope="col">Body</th>
                      <th scope="col">Delete</th>
                  </tr>
              </thead>
              <tbody>
                  { posts.map((post) => (
                      <tr key={post.id}>
                          <th scope="row">{post.id}</th>
                          <td>{post.title}</td>
                          <td>{post.body}</td>
                          <td> <button type="button" onClick={()=>DeleteAction(post.id)} className="btn btn-danger">Delete</button></td>
                        <td> <Link to={"/posts/"+ post.id} className="btn btn-info">More</Link></td>

                         
                      </tr>
                  ))}
              </tbody>
          </table>
    </div>
);
}
export default Postlist;*/}