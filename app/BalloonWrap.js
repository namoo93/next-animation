export default function BalloonWrapComponent({ children, translateX, translateY, scale, rotate, handleDelete, value }) {
  return (
    <div
      style={{
        transform: `translate(${translateX}, ${translateY}) scale(${scale}) rotate(${rotate}deg) `,
      }}
      onClick={() => handleDelete(value)}
      className='balloon_wrap'>
      {children}
    </div>
  );
}
