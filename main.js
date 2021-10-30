$(document).ready(()=>{

    // functions for button clicls
    function toggleMute(){
        let sound = document.getElementById('video');
        
        sound.muted==true ? sound.muted = false : sound.muted = true;
        console.log(sound.muted)
    }

    function toggleClose(){
        let menu = document.getElementsByClassName('toggle');
        
    }

    // Jquery that triggers buttons
    $('#sound').click(()=>{
        toggleMute();
    })

});