const contact = ['ali-09122456776', 'milad-09102567890', 'enzo-09113567890', 'marezayeye-09165518176', 'mamad-09367687980'];
const userQuery = prompt('Please enter the name of contact');

for (let index = 0 ; index < contact.length ; index ++){
    const selectedContact = contact[index].split('-');
    if (selectedContact[0] === userQuery){
        console.log(`The Number for ${selectedContact[0]} is: ${selectedContact[1]}`);
        break;
    } else {
        console.log('Contact not found');
    }

}