//we grab the time-left from the html to grab the element
const timeLeft = document.getElementById('time-left')

//here this is where we have to set the birthday
const birthday = new Date('06/16/2022')
//setup the variables are for sec/min/hour/day, all in milliseconds
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24 
let timerId

//this is the actual function called countdown, here is where we gett the time down to the second over and over again 
function countDown() {
    //Date() is a built in function so we set the variable today from the date function
    const today = new Date()
    //this is the time left until my next birthday 
    const timeSpan = birthday - today

    //if my birthday has passed, we just say something nice about the passing of the birthday 
    if(timeSpan <= -day){
        timeLeft.innerHTML = "Hope you had a special birthday"
        clearInterval(timerId)
        return
    }
    if(timeSpan <= 0){
        timeLeft.innerHTML = "It is your Birthday!!!"
        clearInterval(timerId)
        return
    }

    //this is where we get the actual days, hours, minutes, seconds until your birthday
    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)
    
    //this is what is displayed on the webpage html 
    timeLeft.innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds '

}
//this is where we use the javascript built-in function of setInterval
//timerId will be called everysecond 
//more info: https://www.w3schools.com/jsref/met_win_setinterval.asp
timerID = setInterval(countDown, second)