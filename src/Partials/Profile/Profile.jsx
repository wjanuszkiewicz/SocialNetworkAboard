import React from 'react';
import ProfileClasses from './Profile.module.css';
import BgProfile from '../Profile/bgprofile.jpg';
import BgAvatar from '../Profile/bgavatar.jpg';


const Profile = () => {
    return(
        <div className={ProfileClasses.content}>
        <div className={ProfileClasses.bg_wrapper}>
        <img src={BgProfile} className={ProfileClasses.bg_img__profile}></img>
          <img src={BgAvatar} className={ProfileClasses.bg_img__avatar}></img>
        </div>
        <div className={ProfileClasses.profile_info}>
            <div className={ProfileClasses.user_name}>
                Arya Stark
            </div>
            <div className={ProfileClasses.user_info}>
                <div className={ProfileClasses.user_info__content}>Date of Birth:
                <span className={ProfileClasses.user_info__text}>5 February 1999</span>
                </div>
                <div className={ProfileClasses.user_info__content}>City:
                <span className={ProfileClasses.user_info__text}>Skidel</span>
                </div>
                <div className={ProfileClasses.user_info__content}>Education:
                <span className={ProfileClasses.user_info__text}>BBANU</span>
                </div>
                <div className={ProfileClasses.user_info__content}>Web Site:
                <span className={ProfileClasses.user_info__text}>Konoha.com</span>
                </div>
            </div>
        </div>

    </div>
    );
}
export default Profile;