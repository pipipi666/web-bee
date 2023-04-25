import Container from "../../components/container/container";

type Props = {
  time: number;
};

export default function TimePage({ time }: Props) {
  const getStr = (value: number) => {
    return `${value < 10 ? value.toString().padStart(2, "0") : value}`;
  };

  const getTime = () => {
    const hours = Math.floor(time / 3600);
    const mins = Math.floor((time - 3600 * hours) / 60);
    const seconds = time % 60;
    return `${getStr(hours)}:${getStr(mins)}:${getStr(seconds)}`;
  };

  return <Container title="Timer">{getTime()}</Container>;
}
