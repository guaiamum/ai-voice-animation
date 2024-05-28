// import { animated, useSpring } from '@react-spring/web';

const Bar = ({ amplitude, multiplier }) => {
  console.log(amplitude * multiplier);

  return <div className="min-h-2 min-w-2 bg-white rounded-lg"></div>;
};

export default Bar;
