import Card from "@/components/Card";
import FoldingLetter from "@/components/FoldingLetter";

function App() {
  return (
    <>
      <Card
        title="Folding Letter"
        description="An interactive 3D letter animation that unfolds to reveal its contents."
        className="w-124" // needs calculation based on the contentClassName
        contentClassName="h-120 w-120"
      >
        <FoldingLetter />
      </Card>
    </>
  );
}

export default App;
