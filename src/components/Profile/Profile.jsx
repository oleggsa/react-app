import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.profile}>
      <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="palms"/>
      <div>ava + profile</div>
      <MyPosts />
    </div>
  )
}

export default Profile;
