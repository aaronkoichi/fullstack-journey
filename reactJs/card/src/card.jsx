import profilePic from "./assets/KOI.png";
function Card() {
  return (
    <div className="card">
      <img className="image-card" src={profilePic} alt="Profile Picture"></img>
      <h2 className="card-title">Aaron Koichi</h2>
      <p className="card-text">Hi! I am a Computer Science Major.</p>
    </div>
  );
}

export default Card;
