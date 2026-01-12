import { Theme, Flex } from "@radix-ui/themes";
// import "@radix-ui/themes/styles.css";
import "./theme.css";
import RippleButton from "./components/RippleButton";
import SliderButton from "./components/SliderButton";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Theme accentColor="blue" grayColor="gray" appearance="inherit">
        <Flex gap={"3"} wrap={"wrap"}>
          <Card title="Ripple Button">
            <RippleButton text={"Ripple Button"} duration={1500} />
          </Card>
          <Card title="Slider Button">
            <SliderButton text={"Slider Button"} duration={300} />
          </Card>
        </Flex>
      </Theme>
    </>
  );
}

export default App;
