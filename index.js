
// let textbox=document.getElementById("textbox");
 let play=document.getElementById("play");
 let pause=document.getElementById("pause");
 const inputTxt = document.querySelector("input");

const synth = window.speechSynthesis;

let voices;
voices = synth.getVoices();

play.onclick = () => {


  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  utterThis.voice = voices[1];
  synth.speak(utterThis);
  inputTxt.blur();
};

pause.onclick=()=>{
    
    if(synth.speaking){
         synth.pause();
    }
    console.log("hehehhe")
}


