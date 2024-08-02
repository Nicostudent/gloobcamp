import UserImage from "./UserImage.jsx";
import UserHeading from "./UserHeading.jsx";
import UserSocial from "./UserSocial.jsx";
const UserCard = ({ picture, lastname, name, position, github, linkedin }) => {
  return (
    <div className="bg-white max-w-fit shadow-lg rounded-lg">
      <UserImage source={picture} />
      <UserHeading lastname={lastname} name={name} position={position} />
      <UserSocial github={github} linkedin={linkedin} />
    </div>
  );
};

export default UserCard;
