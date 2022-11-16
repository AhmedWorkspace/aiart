import React from "react";
import Tstyle from "./Tooltips.module.css";
const Tooltip = () => {
  return (
    <div className={Tstyle.container}>
      <div className={Tstyle.header}>
        <p>/ai-arts-model</p>
        <img src={require('../../assets/correct.png')} style={{width:"25px",height:"25px"}} alt=""  />
      </div>
      <div className={Tstyle.body}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          necessitatibus ea praesentium aperiam hic ipsum id quidem, blanditiis
        </p>
      </div>
      <div className={Tstyle.footer}>
        <img src={require('../../assets/magic-wand.png')} alt="" className={Tstyle.fimg} />
        <img src={require('../../assets/copy.png')} alt="" className={Tstyle.fimg} />
        <img src={require('../../assets/save-instagram.png')} alt="" className={Tstyle.fimg} />
        <img src={require('../../assets/download-to-storage-drive.png')}alt=""className={Tstyle.fimg}
        />
      </div>
    </div>
  );
};

export default Tooltip;
