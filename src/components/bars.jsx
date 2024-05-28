import { animated, useSpring } from '@react-spring/web';

const Bar = ({ amplitude, multiplier }) => {
  const springProps = useSpring({
    height: amplitude * multiplier,
    from: { height: 10 }, // Initial height
  });

  return (
    <animated.div
      style={{
        ...springProps,
        background: 'lightblue',
        minHeight: 10,
        minWidth: 10,
      }}
    ></animated.div>
  );
};

export default Bar;