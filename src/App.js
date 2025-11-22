import { useState } from 'react';
import './App.css';
import img1 from './images/computer.jpg'
import img2 from './images/player.jpg'
// import img3 from './images/trophy.webp'
import img4 from './images/winner.gif'
import img5 from './images/looser.gif'


function App() {
   let computernum=(Math.floor(Math.random() * 10) ); 
    const [inp, giventoinp] = useState("");
    const [player, setplayer] = useState(0);
    const [computer, setcomputer] = useState(0);
    const [message, setMessage] = useState("");
    const [highscore, sethighscore] = useState(0);
    const [showImage, setShowImage] = useState(null);

    const numberenterinp = (e) => {
        const inp = e.target.value;
        giventoinp(inp);
        if (inp) {
            if (computernum > inp) {
                setMessage("your guess is lower");
                setcomputer(computer => computer + 1);
               setShowImage("lose")
            } else if (computernum < inp) {
                setMessage("your guess is higher");
                setcomputer(computer => computer + 1);
                setShowImage("lose")
            } else if (computernum == inp) {
                setMessage("yepiee!... you won");
                setplayer(prev =>{
                    const highprev=prev + 1;
                    if (highprev>highscore){
                        sethighscore(highprev);
                    }
                     return highprev;});
                setShowImage("win");
            }
             else {
                setMessage("enter valid number only");
                setShowImage(null);
            }
        }
        // setTimeout(() => setShowImage(null), 5000);
    };
    const backtofirst=()=>{
       setplayer(0);
       setcomputer(0);
       setMessage("");
       giventoinp(""); 
       setShowImage(null);
    }
    return (
        <div className='outputofall'>
        <div className="App">
            <div className='topdetails'>
                <h1>Guess the number 1 to 9 </h1>
                {/* (answer: {computernum})  use if you want to display computer guss in game screen*/}
                <input id="given" name="given" onChange={numberenterinp} min="1" max="9"/>
            </div>
            <div className='twoplayer' style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
                <div className='firstplayer'><img src={img2} id='computerimg'></img><h1>Player score: {player}</h1></div> 
                <div className='computerplayer'><img src={img1} id='playerimg'></img><h1>Computer score: {computer}</h1></div>
                 <div className='lose1'>
                {showImage === "win" && <img src={img4} id='win' alt="Winner" />}
                {showImage === "lose" && <img src={img5} id='loose' alt="Loser" />}
                </div>
            </div>
            <div className='result'>
                <h1 className='result1'>Final result: {message}</h1>
            </div>
            <div>
                <h1>Highest score:{highscore}</h1>
                <button id="reset" onClick={backtofirst}>Reset</button>
            </div> 
        </div>
        </div>
    );
}

export default App;
