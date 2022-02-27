function rain(){
    let amount = 105
    let body = document.querySelector('body')
    let i = 1
    while(i < amount){
        let drop = document.createElement('i')

        let size = Math.random() * 5
        let posX = Math.floor(Math.random() * window.innerWidth)
        let deley = Math.random() * -20
        let duration = Math.random() * 5


        drop.style.width = 0.2 + size+'px'
        drop.style.left = posX + 'px'
        drop.style.animationDelay = deley + 's'
        drop.style.animationDuration = 1 + duration + 's'


        body.appendChild(drop)
        i++
    }
}
rain()