export default function BalloonWrapComponent({ children, translateX, translateY, scale, rotate }) {
  return (
    <div
      style={{
        transform: `translate(${translateX}, ${translateY}) scale(${scale}) rotate(${rotate}deg) `,
      }}
      className='balloon_wrap'>
      {children}
    </div>
  );
}
