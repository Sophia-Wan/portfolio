import "./LandingSection.css";
import CloudLayer from "./CloudLayer";
import CloudDescriptionBox from "./CloudDescriptionBox";
import CloudBackground from "./CloudBackground";
import Title from "./Title";

export default function LandingSection() {
  return (
    <section className="scene-cloud-stage">
      <CloudBackground />
      <CloudLayer position="move-cloud-lower" />
      <CloudLayer position="move-cloud-upper" />
      <CloudDescriptionBox />
      <Title />
    </section>
  );
}
