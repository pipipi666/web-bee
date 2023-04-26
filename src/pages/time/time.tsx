import Container from "../../components/container/container";

type TProps = {
  time: number;
  reset: () => void;
};

export default function TimePage({ time, reset }: TProps) {
  const getStr = (value: number) => {
    return `${value < 10 ? value.toString().padStart(2, "0") : value}`;
  };

  const getTime = () => {
    const hours = Math.floor(time / 3600);
    const mins = Math.floor((time - 3600 * hours) / 60);
    const seconds = time % 60;
    return `${getStr(hours)}:${getStr(mins)}:${getStr(seconds)}`;
  };

  return (
    <Container title="Timer" onRefresh={reset}>
      {getTime()}
    </Container>
  );
}
