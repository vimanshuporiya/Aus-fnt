import { useContext } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext.jsx";

function HomePage() {
 const {currentUser} = useContext(AuthContext)

   console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          It’s not about the money, though thats nice to have. At the end of the day, it’s really about matching the right buyer to the right seller. We’re matchmakers—real estate matchmakers.
          </p>
          <SearchBar />
         <div className="boxes">
         <div className="box">
            <h1>16+</h1>
            <h2>year of experience</h2>
          </div>
          <div className="box">
            <h1>200</h1>
            <h2>Award Gained</h2>
          </div>
          <div className="box">
            <h1>2000+</h1>
            <h2>Property Ready</h2>
          </div>
         </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
}
export default  HomePage