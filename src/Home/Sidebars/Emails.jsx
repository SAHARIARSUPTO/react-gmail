import { useState } from 'react';
import {
  Button,
  Box,
  Typography,
  Modal,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const dummyEmails = [
  { id: 1, sender: 'John Doe', subject: 'Meeting Tomorrow', timestamp: '2 hours ago', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, sender: 'Jane Doe', subject: 'Project Update', timestamp: '5 hours ago', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, sender: 'Aminul Islam', subject: 'Lets have a meeting', timestamp: '1 day ago', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 4, sender: 'Janie Akhtar', subject: 'Project Status', timestamp: '3 days ago', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id: 5, sender: 'Farida Khanam', subject: 'Submit the report', timestamp: '1 week ago', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 6, sender: 'Rahim Ahmed', subject: 'Feedback on Proposal', timestamp: '2 weeks ago', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 7, sender: 'Sarah Wilson', subject: 'Important Announcement', timestamp: '3 weeks ago', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 8, sender: 'Alex Turner', subject: 'New Project Kick-off', timestamp: '1 month ago', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id: 9, sender: 'Raju', subject: 'Discussion on New Features', timestamp: '1 day ago', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 10, sender: 'Ahasan', subject: 'Weekly Progress Report', timestamp: '2 days ago', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 11, sender: 'Asif', subject: 'Team Building Event', timestamp: '3 days ago', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 12, sender: 'Zahir', subject: 'Product Launch Announcement', timestamp: '4 days ago', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  // Add more emails as needed
];

const EmailDetail = ({ email, handleClose }) => (
  <div>
    <Typography variant="h5">{email.subject}</Typography>
    <Typography variant="body1">{email.sender}</Typography>
    <Typography variant="body2">{email.timestamp}</Typography>
    <Typography variant="body2">{email.content}</Typography>
    <Button sx={{ top: 3 }} onClick={handleClose}>Close</Button>
  </div>
);

const DeleteConfirmationModal = ({ open, handleClose, handleDeleteConfirmed }) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography variant="h5">Deleted Unuccessfully</Typography>
      
      <Button onClick={handleClose} sx={{ mr: 2 }}>
        Cancel
      </Button>
    </Box>
  </Modal>
);

const EmailList = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [openEmailDetailModal, setOpenEmailDetailModal] = useState(false);
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] = useState(false);

  const handleCheckBoxClick = (emailId) => {
    const email = dummyEmails.find((email) => email.id === emailId);
    setSelectedEmail(email);
    setOpenEmailDetailModal(true);
  };

  const handleCloseEmailDetailModal = () => {
    setOpenEmailDetailModal(false);
  };

  const handleDelete = () => {
    setOpenDeleteConfirmationModal(true);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setOpenDeleteConfirmationModal(false);
  };

  const handleDeleteConfirmed = () => {
    // Add your delete logic here
    // After deletion, close the confirmation modal
    setOpenDeleteConfirmationModal(false);
  };

  return (
    <div>
      <List>
        {dummyEmails.map((email) => (
          <ListItem
            key={email.id}
            disablePadding
            sx={{
              background: 'white',
              borderRadius: '8px',
              marginBottom: '8px',
            }}
          >
            <ListItemButton onClick={() => handleCheckBoxClick(email.id)}>
              <CheckBoxOutlinedIcon />
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
              <DeleteIcon onClick={handleDelete} />
            </Button>
          </ListItem>
        ))}
      </List>
      <Modal
        open={openEmailDetailModal}
        onClose={handleCloseEmailDetailModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedEmail && <EmailDetail email={selectedEmail} handleClose={handleCloseEmailDetailModal} />}
        </Box>
      </Modal>
      <DeleteConfirmationModal
        open={openDeleteConfirmationModal}
        handleClose={handleCloseDeleteConfirmationModal}
        handleDeleteConfirmed={handleDeleteConfirmed}
      />
    </div>
  );
};

export default EmailList;
