import React, { useRef, useEffect, useState } from 'react';
import Rolldate from 'rolldate';
import Arrow from '../../assets/images/Arrow.svg'

const TimePicker = () => {
  const [inputValue, setInputValue] = useState('');
  const elRef = useRef(null);

  useEffect(() => {
    const rolldate = new Rolldate({
      el: elRef.current,
      format: 'hh:mm',
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
        am: '오전',
        pm: '오후'
      },
      init: function() {
        // console.log('Rolldate init');
      },
      moveEnd: function(scroll) {
        // console.log('Rolldate moveEnd', scroll);
      },
      confirm: function(date) {
        const [hours, minutes] = date.split(':');
        const hoursInt = parseInt(hours, 10);
        const period = hoursInt >= 12 ? '오후' : '오전';
        const formattedHours = ((hoursInt + 11) % 12 + 1);
        const formattedTime = ` ${period} ${formattedHours}:${minutes}`;
        // console.log('Selected time', formattedTime);
        setInputValue(formattedTime);
      },
    });

    return () => rolldate.destroy();
  }, []);

  return (
    <div className='timepicker'> {/* Inline display */}
      <input
        ref={elRef}
        className='inputType1'
        type="text"
        value={inputValue}
        placeholder='시간 설정'
        readOnly
        onChange={() => {}}
      />
      <img src={Arrow} alt="설정" />
    </div>
  );
};

export default TimePicker;
