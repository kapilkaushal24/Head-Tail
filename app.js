

let btns = document.querySelectorAll('button')
let score_box = document.querySelector('.score')

for(let t of btns){
    t.addEventListener("click", toss)
}

let score_user = 0, score_computer = 0

function toss(event){
    let user_selection = event.target.innerText
    let choices = ["Head", "Tail"]
    let random_index = parseInt(Math.random()*choices.length)
    let random_choice =  choices[random_index]
    
    
    if(user_selection === random_choice){
        console.log("User Won", user_selection, random_choice)
        score_user++
        score_box.innerText = `User Score : ${score_user} Computer Score : ${score_computer}`
    }
    else{
        console.log("User Lost", user_selection, random_choice)
        score_computer++
        score_box.innerText = `User Score : ${score_user} Computer Score : ${score_computer}`
    }
}