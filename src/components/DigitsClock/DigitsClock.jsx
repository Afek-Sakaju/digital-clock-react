import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Digit } from "../../base-components";
import "./DigitsClock.scss";

export function DigitsClock({ updateAmPm ,ampmState}) {  
  const [localeTime,setLocaleTime] = useState(new Date().toLocaleTimeString());
  const [time, ampm] = localeTime.split(' ')
  const [hh, mm, ss] = time.split(':'); 

  useEffect(()=>{
    const timerInterval = setInterval(()=>{
      setLocaleTime(new Date().toLocaleTimeString());
    },1000);

    return () => clearInterval(timerInterval);
  },[])

  useEffect(()=>{
    console.log('useEffect2');
    if(ampm !== ampmState){
      updateAmPm(ampm)
    }
  },[ampm])

  return (
    <div className="numbersContainer">
      {hh.split('').map((digit)=><Digit value={+digit} />)}
      <div className="twoDots">:</div>
      {mm.split('').map((digit)=><Digit value={+digit} />)}
      <div className="twoDots">:</div>
      {ss.split('').map((digit)=><Digit value={+digit} />)}
      </div>
  );
}

DigitsClock.propTypes = {
  updateAmPm: PropTypes.func,
  ampmState: PropTypes.bool,
};

//DayText.defaultProps = {};
