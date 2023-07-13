export default function NormalComponent({ backgroundColor = '#bfff00' }) {
  return (
    <div className='balloon_normal balloon_animation'>
      <div
        style={{ backgroundColor: backgroundColor }}
        className='normal_head'>
        <div className='balloon_highlight'></div>
      </div>
      <div
        style={{ backgroundColor: backgroundColor }}
        className='balloon_bottom'></div>
    </div>
  );
}
