const jsonServer = require('json-server');  
const path = require('path');  
const db = jsonServer.router(path.join(__dirname, '../db.json')).db;  

const tickets = db.get('tickets');  

  
exports.getAllTickets = () => {  
  return tickets.value();  
};  


exports.getTicketById = (id) => {  
  return tickets.find({ id }).value();  
};  

 
exports.createTicket = (ticketData) => {  
  const newTicket = {  
    id: String(Date.now()),   
    ...ticketData  
  };  
  tickets.push(newTicket).write();  
  return newTicket;  
};  


exports.updateTicket = (id, ticketData) => {  
  const updatedTicket = tickets.find({ id }).assign(ticketData).write();  
  return updatedTicket;  
};  


exports.deleteTicket = (id) => {  
  const ticket = tickets.remove({ id }).write();  
  return ticket.length > 0; 
};  