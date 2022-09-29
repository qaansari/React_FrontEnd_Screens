import "./App.css";
import Header from "./components/Header.js";
import Left_Nav from "./components/Left_Nav.js";
import LeftMainSidebar from "./components/LeftMainSidebar";
import Card from "./components/Card";
import Stats from "./components/Stats.js";
import MyForm from "./components/Form.js";
import Right_Nav from "./components/Right_Nav.js";
import Footer from "./components/Footer.js";
import RightMainSidebar from "./components/RightMainSidebar";
function App() {
  const HeaderServices = [{ Header_Text: "Top Banner" }];
  const FooterServices = [{ Footer_Text: "Bottom Banner" }];
  return (
    <section>
      {/* Header Starts */}
      {HeaderServices.map((x) => (
        <Header Header_Text={x.Header_Text} />
      ))}
      {/* Header Ends */}

      {/* Left-Side navigation Starts */}
      <Left_Nav />
      {/* Left-Side navigation Ends */}
      <div className="row">
        {/* Main-Left-Sidebar-Starts */}
        <LeftMainSidebar />
        {/* Main-Left-Sidebar-Ends */}
        {/* Main Card Starts */}
        <Card />
        {/* Main Card Ends */}
        {/* Stats Section Starts */}
        {/* <Stats /> */}
        {/* Stats Section Ends */}
        {/* Form Section Starts */}
        {/* <MyForm /> */}
        {/* Form Section Ends */}
        {/* Main-Right-Sidebar-Starts */}
        <RightMainSidebar />
        {/* Main-Right-Sidebar-Ends */}
      </div>
      {/* Right-Side navigation Starts */}
      <Right_Nav />
      {/* Right-Side navigation Ends */}
      {/* Footer Starts */}
      {FooterServices.map((x) => (
        <Footer Footer_Text={x.Footer_Text} />
      ))}
      {/* Footer Ends */}
    </section>
  );
}

export default App;
