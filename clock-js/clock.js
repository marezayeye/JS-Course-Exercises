function generateDigitalTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    const container = document.querySelector(".clock");
    container.innerText = `${hour} : ${minute} : ${second}`;
};
const interval = setInterval(generateDigitalTime, 1000);


