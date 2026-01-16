import { Theme, Flex } from "@radix-ui/themes";
// import "@radix-ui/themes/styles.css";
import "./theme.css";
import RippleButton from "./components/RippleButton";
import SliderButton from "./components/SliderButton";
import RadialGradientButton from "./components/RadialGradientButton";
import Card from "./components/Card";
import FoldingLetter from "./components/FoldingLetter";

function App() {
  return (
    <>
      <Theme
        accentColor="blue"
        grayColor="gray"
        appearance="inherit"
        className="p-4 bg-gray-100"
      >
        <Flex gap={"3"} wrap={"wrap"}>
          <Card title="Ripple Button">
            <RippleButton text={"Ripple Button"} duration={1500} />
          </Card>
          <Card title="Slider Button">
            <SliderButton text={"Slider Button"} duration={300} />
          </Card>
          <Card title="Radial Gradient Button">
            <RadialGradientButton text={"Gradient Button"} duration={1000} />
          </Card>
          {/* <Card title="Folding letter"> */}
          <FoldingLetter />
          {/* </Card> */}
        </Flex>
      </Theme>
    </>
  );
}

export default App;
