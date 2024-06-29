import React,{ useEffect, useState} from "react";
import Postlist from "./PostList";
import { data } from "jquery";
import PostsModel from "./PostsModel";
//const Posts=()=>{
  {/*const [checkAuth, setcheckAuth] = useState('false')
  const [isWaiting, setIsWataing]= useState(true);
  const [serverError, setServerError]= useState(null);
  const [posts, setPost]= useState(null)
*/}



{/*  to fetch the data from PostsModel*/}
//const {isWaiting, serverError, posts, DeleteAction}= PostsModel('https://jsonplaceholder.typicode.com/posts');


    {/*const [posts1, setPosts1] = useState([
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
           body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            userId: 1,
           id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            userId: 1,
           id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          },
          {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          },
          {
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
           body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
          },
    ]);




    {/*const DeleteAction=(id)=>{
      const updatePosts = posts.filter(post=>post.id !=id);
      setPost(updatePosts)
    }*/}


    {/*useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
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
      }).catch(er=>{  
        
     
        console.log(er.message);
        setServerError(er.message);
        setIsWataing(false);
      });
    },[]);*/}
    




   // return (
     // <div className="container">
       {/* <button type="button" onClick={()=>setcheckAuth('true')} className="btn btn-dark">Dark</button>
       <h1>Status:{checkAuth}</h1>*/}
       //{isWaiting && <h1>Please wait to load data...</h1>}


      
       {/*{setServerError && <h1>{serverError}</h1>}*/}

       //{posts && <Postlist posts={posts} name="Posts" DeleteAction={DeleteAction}/>}

       {/*{posts && <Postlist posts={posts} name="Posts" DeleteAction={DeleteAction} />}*/}

      //</div>
     
  //);

//}
//export default Posts;



