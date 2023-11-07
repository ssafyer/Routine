import React, { useRef, useEffect, useState } from 'react';
import Rolldate from 'rolldate';
import icoArrow2 from '../../assets/images/RightArrow2.svg'

const TimePicker = () => {
  const [inputValue, setInputValue] = useState('');
  const elRef = useRef(null);

  useEffect(() => {
    const rolldate = new Rolldate({
      el: elRef.current,
      format: 'hh:mm:ss', // Update the format to include seconds
      beginYear: 2000,
      endYear: 2100,
      lang: {
        title: '시간 설정',
        cancel: '취소',
        confirm: '확인',
        year: 'Year',
        month: 'Month',
        day: 'Day',
        hour: '시',
        min: '분',
        sec: '초', // Add label for seconds
        am: '오전',
        pm: '오후'
      },
      confirm: function(date) {
        const [hours, minutes, seconds] = date.split(':'); // Split the date to include seconds
        const hoursInt = parseInt(hours, 10);
        const period = hoursInt >= 12 ? '오후' : '오전';
        const formattedHours = ((hoursInt + 11) % 12 + 1);
        // Format the time with hours, minutes, and seconds
        const formattedTime = ` ${period} ${formattedHours}시 ${minutes}분 ${seconds}초`;
        setInputValue(formattedTime);
      },
    });

    return () => rolldate.destroy();
  }, []);

  return (
      <button className='flexBetween settime' ref={elRef}>
          <span>{inputValue?inputValue:'시간 설정'}</span>
          <img src={icoArrow2} alt="입력" />
      </button>
  );
};

export default TimePicker;
