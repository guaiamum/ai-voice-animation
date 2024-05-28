import { animated, useSpring } from "@react-spring/web";

const Bar = ({ amplitude, multiplier }) => {
  const springProps = useSpring({
    height: amplitude * multiplier,
    from: { height: 10 }, // Initial height
  });

  return (
    <animated.div
      style={springProps}
      className="min-h-2 min-w-2 bg-white rounded-lg"
    ></animated.div>
  );
};

export default Bar;
