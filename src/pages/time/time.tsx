import Container from "components/container/container";
import { useEffect, useState } from "react";
import { getTime } from "utils/utils";

type TTimePageProps = {
  start: Date;
  onRefresh: () => void;
};

export default function TimePage({ start, onRefresh }: TTimePageProps) {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    setTime(getTime(start));

    const interval = setInterval(() => {
      setTime(getTime(start));
    }, 1000);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <Container title="Timer" onRefresh={onRefresh}>
      {time}
    </Container>
  );
}
