import {useEffect  ,useState } from "react";

{/*  To separate the data :>> this file is responsible for fetch data from the internet and provide this data for the posts.js file   ((Model))  */}

const PostsModel=(url)=>{ {/* the url here is as paramater */}
    const [isWaiting, setIsWataing]= useState(true);
    const [serverError, setServerError]= useState(null);
    const [posts, setPost]= useState(null)

    const DeleteAction=(id)=>{
        const updatePosts = posts.filter(post=>post.id !=id);
        setPost(updatePosts)
      }

    useEffect(()=>{
        fetch(url)
        .then(response=>{
          console.log(response.ok)
          if(!response.ok){
            throw Error("can't connect to the server..!");
          }
          return response.json();
        })
        .then (data=>{
          console.log(data);
          setPost(data);
          setIsWataing(false)
        }).catch(er=>{   {/*catch for any error*/}
          console.log(er.message);
          setServerError(er.message);
          setIsWataing(false);
        });
      },[url]); {/* as a (useEffect work when it gives dependencies as url) ,  " when the url  is updataed >> the useEffect is work" */}


      {/* to return this all data to the posts.js */}
    return {isWaiting, serverError, posts, DeleteAction}
}
export default PostsModel;