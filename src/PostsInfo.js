import { useParams } from "react-router-dom";

const PostsInfo = ()=>{
    const {id}=useParams();
    console.log(id);

    return(
        <div>
            <h1> PostInfo - {id}</h1>
        </div>
    );
}
export default PostsInfo;