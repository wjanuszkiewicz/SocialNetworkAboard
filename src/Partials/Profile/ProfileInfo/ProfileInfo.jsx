import React from 'react';
import Snc from './ProfileInfo.module.css';
import BgProfile from './bgprofile.jpg';
import BgAvatar from './bgavatar.jpg';


const ProfileInfo = () => {
    return (
        <div>
            <div className={Snc.bg_wrapper}>
                <img src={BgProfile} className={Snc.bg_img__profile}></img>
                <img src={BgAvatar} className={Snc.bg_img__avatar}></img>
            </div>
            <div className={Snc.profile_info}>
                <div className={Snc.user_name}>
                    Arya Stark
                </div>
                <div className={Snc.user_info}>
                    <div className={Snc.user_info__content}>Date of Birth:
                        <span className={Snc.user_info__text}>5 February 1999</span>
                    </div>
                    <div className={Snc.user_info__content}>City:
                        <span className={Snc.user_info__text}>Skidel</span>
                    </div>
                    <div className={Snc.user_info__content}>Education:
                        <span className={Snc.user_info__text}>BBANU</span>
                    </div>
                    <div className={Snc.user_info__content}>Web Site:
                        <span className={Snc.user_info__text}>Konoha.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;