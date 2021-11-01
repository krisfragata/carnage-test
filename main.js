$(document).ready(()=>{

    // functions for button clicls
    function toggleMute(){
        let sound = document.getElementById('video');
        
        sound.muted==true ? sound.muted = false : sound.muted = true;
        console.log(sound.muted)
    }

    function toggleClose(){
        if($('.toggle').hasClass('active')){
            $('.toggle').removeClass('active');
            $('.showcase').removeClass('active');
        }
        else{
            $('.toggle').addClass('active');
            $('.showcase').addClass('active');
        }
    }

    // Jquery that triggers buttons
    $('#sound').click(()=>{
        toggleMute();
    })

    $('.toggle').click(()=>{
        toggleClose();
    })

});