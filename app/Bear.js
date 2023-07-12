'use client';
export default function BearComponent({ fill, isOnClick }) {
  return (
    <div className='balloon_bear'>
      <div className='head'>
        <div className='right_eye'></div>
        <div className='left_eye'></div>
        <div className='right_cheek'></div>
        <div className='bear_mouse'></div>
        <div className='left_cheek'></div>
        <div className='nose'></div>
      </div>
      <div className='right_ear'>
        <div className='ear_inner'></div>
      </div>
      <div className='left_ear'>
        <div className='ear_inner'></div>
      </div>
    </div>
  );
}
