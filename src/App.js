import "./App.css";
import Header from "./components/Header.js";
import Left_Nav from "./components/Left_Nav.js";
import Card from "./components/Card";
import Stats from "./components/Stats.js";
import MyForm from "./components/Form.js";
import Right_Nav from "./components/Right_Nav.js";
import Footer from "./components/Footer.js";
function App() {
  const HeaderServices = [{ Header_Text: "Top Banner" }];
  const FooterServices = [{ Footer_Text: "Bootom Banner" }];
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
      {/* Main Card Starts */}
      {/* <Card /> */}
      {/* Main Card Ends */}
      {/* Stats Section Starts */}
      <Stats />
      {/* Stats Section Ends */}
      {/* Form Section Starts */}
      {/* <MyForm /> */}
      {/* Form Section Ends */}
      {/* Right-Side navigation */}
      <Right_Nav />
      {/* Footer Starts */}
      {FooterServices.map((x) => (
        <Footer Footer_Text={x.Footer_Text} />
      ))}
      {/* Footer Ends */}
    </section>
  );
}

export default App;
