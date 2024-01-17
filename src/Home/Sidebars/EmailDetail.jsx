import  { useState } from 'react';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const email = [
    { id: 1, sender: 'John Doe', subject: 'Meeting Tomorrow', timestamp: '2 hours ago' },
    { id: 2, sender: 'Jane Doe', subject: 'Project Update', timestamp: '5 hours ago' },
    { id: 3, sender: 'Aminul Islam', subject: 'Lets have a meeting', timestamp: '1 day ago' },
    { id: 4, sender: 'Janie Akhtar', subject: 'Project Status', timestamp: '3 days ago' },
    { id: 5, sender: 'Farida Khanam', subject: 'Submit the report', timestamp: '1 week ago' },
    { id: 6, sender: 'Rahim Ahmed', subject: 'Feedback on Proposal', timestamp: '2 weeks ago' },
    { id: 7, sender: 'Sarah Wilson', subject: 'Important Announcement', timestamp: '3 weeks ago' },
    { id: 8, sender: 'Alex Turner', subject: 'New Project Kick-off', timestamp: '1 month ago' },
    // Add more emails as needed
  ];

const EmailDetail = ({ email }) => (
  <div>
    <Typography variant="h5">{email.subject}</Typography>
    <Typography variant="body1">{email.sender}</Typography>
    <Typography variant="body2">{email.timestamp}</Typography>
    {/* Add more details as needed */}
  </div>
);

const EmailList = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedEmails, setSelectedEmails] = useState([]);

  const handleCheckBoxClick = (emailId) => {
    if (selectedEmails.includes(emailId)) {
      setSelectedEmails(selectedEmails.filter(id => id !== emailId));
      setSelectedEmail(null); // Clear selected email content when unselecting
    } else {
      setSelectedEmails([...selectedEmails, emailId]);
      setSelectedEmail(dummyEmails.find(email => email.id === emailId));
    }
  };

  return (
    <div>
      <List>
        {dummyEmails.map((email) => (
          <ListItem key={email.id} disablePadding sx={{ background: 'white', borderRadius: '8px', marginBottom: '8px' }}>
            <ListItemButton onClick={() => handleCheckBoxClick(email.id)}>
              <CheckBoxOutlinedIcon color={selectedEmails.includes(email.id) ? 'primary' : 'action'} />
              <ListItemIcon>
                <EmailOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={email.sender}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {email.subject}
                    </Typography>
                    {` - ${email.timestamp}`}
                  </>
                }
              />
            </ListItemButton>
            <Button sx={{ paddingRight: 3 }}>
              <StarBorderOutlinedIcon />
            </Button>
            <Button sx={{ paddingRight: 3 }}>
              <DeleteIcon />
            </Button>
          </ListItem>
        ))}
      </List>
      {selectedEmail && <EmailDetail email={selectedEmail} />}
    </div>
  );
};

export default EmailList;
