const NextJSIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="256"
    height="256"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%">
        <stop offset="0%" stopColor="#FFF"></stop>
        <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%">
        <stop offset="0%" stopColor="#FFF"></stop>
        <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
      </linearGradient>
      <circle id="a" cx="128" cy="128" r="128"></circle>
    </defs>
    <mask id="b" fill="#fff">
      <use xlinkHref="#a"></use>
    </mask>
    <g mask="url(#b)">
      <circle cx="128" cy="128" r="128"></circle>
      <path
        fill="url(#c)"
        d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
      ></path>
      <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path>
    </g>
  </svg>
);

export default NextJSIcon;
