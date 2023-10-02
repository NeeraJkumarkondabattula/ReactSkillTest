import styles from './ToolTip.module.css'
import info from '../icon/information.png'
import { useState } from 'react';

const ToolTip = () =>{
    const [visible,setVisible] = useState(false);
    const [position,setPosition] = useState("Top");
    
    return(
        <>
            
            <div className={styles.container}>
                <select name="cars" id="cars" className={styles.select}>
                    <option value="Top">Top</option>
                    <option value="Left">Left</option>
                    <option value="Bottom">Bottom</option>
                    <option value="Right">Right</option>
                </select>

                {visible && position=="Top" &&
                    <>
                        <p className={styles.info1}>Thanks For Hovering! Am Tooltip</p>
                        <span className={styles.triangleDown}></span>
                    </>
                }
                {visible && position=="Left" &&
                    <>
                        <p className={styles.info2}>Thanks For Hovering! Am Tooltip</p>
                        <span className={styles.triangleRight}></span>
                    </>
                }
                {visible && position=="Bottom" &&
                    <>
                        <p className={styles.info3}>Thanks For Hovering! Am Tooltip</p>
                        <span className={styles.triangleUp}></span>
                    </>
                }
                {visible && position=="Right" &&
                    <>
                        <p className={styles.info4}>Thanks For Hovering! Am Tooltip</p>
                        <span className={styles.triangleLeft}></span>
                    </>
                }
                <button className={styles.button} onMouseEnter={()=>{setVisible(true); setPosition(document.querySelector("select").value) }} onMouseLeave={()=>{setVisible(false); console.log(visible)}} >Hover Me <img src={info} alt='icon' className={styles.icon}/></button>
            </div>
        </>
    )
}

export default ToolTip;