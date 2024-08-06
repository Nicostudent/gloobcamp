import Link from "next/link";
import Paragraph from "./Writing/Paragraph";
const EndTopic = ({paragraph = null}) => {
  return (
    <div>
      <div>
        <Paragraph>{paragraph}</Paragraph>
        <Link href="/">Volver</Link>
      </div>
    </div>
  );
};
export default EndTopic;