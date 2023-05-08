import Container from "components/container/container";
import { getTime } from "utils/utils";

type TTimePageProps = {
  time: number;
  onRefresh: () => void;
};

export default function TimePage({ time, onRefresh }: TTimePageProps) {
  return (
    <Container title="Timer" onRefresh={onRefresh}>
      {getTime(time)}
    </Container>
  );
}
