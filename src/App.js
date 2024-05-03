import "./styles.css";

function ImgHeader() {
  return (
    <img
      src="https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj"
      alt="avatar image"
      style={{ width: "350px", height: "200px" }}
    />
  );
}
function MainHeading() {
  return (
    <div>
      <h1>Nikunj Kumar Garg</h1>
      <p>
        Full stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games.
      </p>
    </div>
  );
}
function SkillContainer() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Skill name="nodejs" emoji="😊" color="red"></Skill>
      <Skill name="reactjs" emoji="😂" color="brown"></Skill>
      <Skill name="javascript" emoji="🤣" color="green"></Skill>
      <Skill name="Docker" emoji="❤️" color="yellow"></Skill>
    </div>
  );
}
function Skill(props) {
  return (
    <p style={{ backgroundColor: props.color }}>{props.name + props.emoji}</p>
  );
}
export default function App() {
  return (
    <div className="App">
      <ImgHeader></ImgHeader>
      <MainHeading></MainHeading>
      <SkillContainer></SkillContainer>
    </div>
  );
}
