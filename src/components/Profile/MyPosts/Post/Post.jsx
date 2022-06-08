import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png" alt="avatar"/>
      {props.message}
      <div className="likes">
        Likes: {props.likes}
      </div>
    </div>
  )
}

export default Post;
