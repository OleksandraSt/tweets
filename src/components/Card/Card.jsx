import { useState,useEffect } from 'react';
import {
    CardContainer,
    Logo,
    BlocksImg,
    AvatarContainer,
    Avatar,
    AvatarImg,
    AvatarLine,
    CardText,
    FollowingButton,
    CardTextContainer,
    FollowButton,
    ButtonContainer,
  } from './Card.styled';
import logo from '../../images/logo.svg';
import blocksImg from '../../images/blocks.png';
import defaultAvatar from '../../images/defaultAvatar.png';

const Card = ({ user }) => {
    const { id, avatar, tweets, followers }=user;
     const [followersUser, setFollowersUser] = useState(localStorage.getItem(`${id}followersUser`)?JSON.parse(localStorage.getItem(`${id}followersUser`)) :Number(followers) )
     const [isFollowing, setIsFollowing] = useState( localStorage.getItem(`isFollowing${id}`) ? JSON.parse(localStorage.getItem(`isFollowing${id}`)) : false);
     
     useEffect(() => {
     localStorage.setItem(`${id}followersUser`, JSON.stringify(followersUser));
     localStorage.setItem(`isFollowing${id}`, JSON.stringify(isFollowing));
 }, [followersUser, isFollowing, id]);
 
 
       const onFollowClick = () => {
     setIsFollowing(true);
     setFollowersUser(followersUser + 1)
   }
 
     const onFollowingClick = () => {
       setIsFollowing(false);
       setFollowersUser(followersUser - 1)
   }
 
 
     const formatingNumber = new Intl.NumberFormat('en-US').format(followersUser)
   return (
     <CardContainer key={id}>
       <Logo src={logo} alt="logo" />
       <BlocksImg src={blocksImg} alt="message blocks" />
 
       <Avatar>
         <AvatarLine />
         <AvatarContainer>
           {!avatar ? (
             <AvatarImg src={defaultAvatar} alt="avatar" />
           ) : (
             <AvatarImg src={avatar} alt="avatar" />
           )}
         </AvatarContainer>
       </Avatar>
       <CardTextContainer>
         <CardText> {tweets} tweets</CardText>
         <CardText>{formatingNumber} Followers</CardText>
       </CardTextContainer>
 
       <ButtonContainer >
         {isFollowing ? (
           <FollowingButton onClick={onFollowingClick}>Following</FollowingButton>
         ) : (
           <FollowButton  onClick={onFollowClick}>Follow</FollowButton>
         )}
       </ButtonContainer>
     </CardContainer>
   );
 };
 
 export default Card;