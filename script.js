const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    ////============================


    // document.getElementById('buttons').appendChild(btn)

    // It will add all buttons with class btn
    // We  can see result in console
    

    ////---------------------------------


    //// USING THIS ONE IT WILL PLAY ON OVER EACHOTHER

    // btn.addEventListener('click', () =>{
    //     document.getElementById(sound).play()
    
    // })


    ///==================

    // WE MAKE A FUNCTION BECAUSE WHEN I CLICK NEXT 
    // THEN PREVIOUS WILL STOP

    btn.addEventListener('click', () =>{
        stopSongs()
        document.getElementById(sound).play()
  
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound =>{
      const song = document.getElementById(sound)

      song.pause()
      song.currentTime = 0;
    })
}

