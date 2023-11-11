// Challenge 1. Find customers with age>60 and age<10
// Challenge 2. Build customer data with title and full name

const customers = [
    {
      id: 1,
      f_name: "Abby",
      l_name: "Thomas",
      gender: "M",
      married: true,
      age: 32,
      expense: 500,
      purchased: ["Shampoo", "Toys", "Book"],
    },
    {
      id: 2,
      f_name: "Jerry",
      l_name: "Tom",
      gender: "M",
      married: true,
      age: 64,
      expense: 100,
      purchased: ["Stick", "Blade"],
    },
    {
      id: 3,
      f_name: "Dianna",
      l_name: "Cherry",
      gender: "F",
      married: true,
      age: 22,
      expense: 1500,
      purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
      id: 4,
      f_name: "Dev",
      l_name: "Currian",
      gender: "M",
      married: true,
      age: 82,
      expense: 90,
      purchased: ["Book"],
    },
    {
      id: 5,
      f_name: "Maria",
      l_name: "Gomes",
      gender: "F",
      married: false,
      age: 7,
      expense: 300,
      purchased: ["Toys"],
    },
  ];

//Challenge 1
const elderlyCustomers = customers.filter(customers => customers.age>60)
console.log(elderlyCustomers);

const under10Years  = customers.filter(customer => customer.age < 10)
console.log(under10Years);

//challenge 2
const customerWithFullName = customers.map(object => {
  let title = "";
  if (object.gender === "M"){
    title = "Mr. ";
  } else if (object.gender === "F" && object.married){
    title = "Mrs. ";
  } else {
    title = "Ms. ";
  }
  object.fullName = `${title} ${object.f_name} ${object.l_name}`
  return object;
})

console.log(customerWithFullName);