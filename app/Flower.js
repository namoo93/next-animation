export default function FlowerComponent({ line }) {
  return (
    <div className='balloon_flower balloon_animation'>
      <div className='flower_head'></div>
      <div className='flower_head'></div>
      <div className='flower_head'></div>
      <div className='flower_head'></div>
      <div className='flower_head'></div>
      <div className='flower_head'></div>
      <div className='flower_head inside'>
        <div className='flower_eyes_left'></div>
        <div className='flower_eyes_right'></div>
        <div className='flower_mouse'></div>
      </div>
      <div className='balloon_bottom'></div>
      {line && <div className='lines'></div>}
    </div>
  );
}
