const start = document.getElementById("start");
const stop = document.getElementById("stop");
const voiceDetected = document.getElementById("voiceDetected");
if('SpeechRecognition' in window || 'webkitSpeechRecognition' in window){
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
    recognition.continuos = true;
    recognition.lang = 'en-US';
    recognition.onresult = (event)=>{
        const transcript = event.results[0][0].transcript;
        console.log(event);
        console.log(transcript)
        voiceDetected.innerHTML += transcript+" ";
    }
    start.addEventListener("click",(e)=>{
        recognition.start();
    })
    stop.addEventListener("click",(e)=>{
        recognition.stop();
    })
}else{
    voiceDetected.textContent = "Sorry, It's Not Available In Your Browser!!!";
    start.setAttribute("disabled","true");
    stop.setAttribute("disabled","true");
}