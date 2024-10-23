import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-title-container">
      <span className="home-Htitle">
        Home
      </span>
      </div>
      <img src="numan.jpg" />
      <div className="home-name-container"> นายนรวัฒน์ ดูการดี 66080795<br/>
       คณะเทคโนโลยีสารสนเทศ <br/>
       สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
      </div>
    </div>
  );
}

export default Home;
