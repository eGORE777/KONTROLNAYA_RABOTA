const ticketService = require('../services');  


exports.getAllTickets = (req, res) => {  
  const tickets = ticketService.getAllTickets();  
  res.status(200).json(tickets);  
};  

 
exports.getTicketById = (req, res) => {  
  const ticket = ticketService.getTicketById(req.params.id);  
  if (ticket) {  
    res.status(200).json(ticket);  
  } else {  
    res.status(404).json({ error: 'Ticket not found' });  
  }  
};  


exports.createTicket = (req, res) => {  
  const newTicket = ticketService.createTicket(req.body);  
  res.status(201).json(newTicket);  
};  


exports.updateTicket = (req, res) => {  
  const updatedTicket = ticketService.updateTicket(req.params.id, req.body);  
  if (updatedTicket) {  
    res.status(200).json(updatedTicket);  
  } else {  
    res.status(404).json({ error: 'Ticket not found' });  
  }  
};  


exports.deleteTicket = (req, res) => {  
  const deleted = ticketService.deleteTicket(req.params.id);  
  if (deleted) {  
    res.status(204).end();  
  } else {  
    res.status(404).json({ error: 'Ticket not found' });  
  }  
};  