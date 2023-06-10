const userData = [
    {name: "milad", marks: [10,9,17,20,5]},
    {name: "mamad", marks: [10,13,17,15,5]},
    {name: "ali", marks: [10,9,17,3,7]},
    {name: "marezayeye", marks: [4,9,4,20,5]},
    {name: "teymoor", marks: [10,13,17,20,15]}
];

const newuserData = userData.map(item => {
    const sum = item.marks.reduce( (acc, cur) => acc + cur, 0 );
    const average = sum / item.marks.length;
    userData.rate = average;
    console.log(`${item.name}'s rate it ${average}`);
    item.rate = average;
    return(item);
    
});

console.log(newuserData);

const accepted = newuserData.filter(item => item.rate >= 10);

console.log(accepted);