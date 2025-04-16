import userImg from "../assets/UserImg.webp";
import PropertyTile from "./PropertyTile";
import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    username: "HolidayMaker",
    bio: "I am a respectful guest who loves to go on holidays!",
    mostRecentStay: {
      img: "https://media.vrbo.com/lodging/28000000/27320000/27314000/27313935/e7c3076b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      name: "Beach House",
      id: 1,
    },
  });

  return (
    <div id="profile">
      <img id="profilePic" src={userImg}></img>
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <h2>My most recent stay:</h2>
      <PropertyTile
        image={user.mostRecentStay.img}
        name={user.mostRecentStay.name}
        id={user.mostRecentStay.id}
      />
    </div>
  );
};

export default Profile;
