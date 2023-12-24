import React from 'react';
import "./Home.css";
import Man from "../../assests/man.jpg";

export default function Home() {
  return (
    <div className='home'>
        <div className='contLeft'>
            <img src={Man} alt="" />
        </div>
        <div className='contRight'>
            <div>
                <p>Is your church embracing Impact or AI hesitant?</p>
                <ul>
                    <li>Take this 3-minute assessment.</li>
                    <li>Invite your team to take it too after you do</li>
                    <li>View everyone's result on 1 dashboard.</li>
                    <li>Align on the best next step for your church's approach to AI.</li>
                </ul>
            </div>
            <div>
                <button>GET STARTED</button>
            </div>
        </div>
    </div>
  )
}
