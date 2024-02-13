var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function custardtart(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();   
}

recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;

    if(Content=="take my picture"){
        console.log(Content);
        speak(); 
    }
    
}


function speak(){
    var synth=window.speechSynthesis;
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_selfie();
      
      
    },5000);
   
}

Webcam.set({
height:250,
width:350,
image_format:"png",
png_quality:90
});

camera=document.getElementById("camera");
 
function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>"
    })
}
