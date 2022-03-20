import React,{useState,useRef} from 'react';
import classes from './component.module.css';

export default function ImageHolder({title,img1,img2}) {

  const [left,setLeft] = useState(0);
  const div = useRef(null);

  return (
    <div className={classes.imageEle}>
        <h1>{title}</h1>
        <div className={classes.holder} useRef={div}>
            <input type="range"  min="0" max="100" className={classes.drag} value={left} onChange={(e)=>setLeft(parseInt(e.target.value))}/>
            <div className={classes.img1} style={{width:`${left}%`}}>
              <img src={img1} alt=""></img></div>
            <div className={classes.img2}>
              <img src={img2} alt=""></img>
            </div>
        </div>
    </div>
  )
}
