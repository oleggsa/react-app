
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post message="Hello, Junior" likes="15" />
        <Post message="This is your first app" likes="20" />
        <Post message="And you're using props!!" likes="42" />
      </div>
    </div>
  )
}

export default MyPosts;
