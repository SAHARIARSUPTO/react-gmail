import { useState } from 'react';
import {
  Modal,
  TextField,
  Button,
  IconButton,
  Container,
  Box,
  styled,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ComposeButton = styled(IconButton)({
  backgroundColor: 'white',
  color: 'black',
});

const ComposeText = styled('div')({
  backgroundColor: 'white',
  padding: '16px',
});

const CustomModal = styled(Modal)({
  '& .MuiDialog-root': {
    backgroundColor: 'transparent',
  },
});

const ComposeEmail = () => {
  const [open, setOpen] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    // Implement your logic to send the email
    // For now, just close the modal
    handleClose();
  };

  return (
    <div>
      <ComposeButton onClick={handleOpen}>
        Compose
      </ComposeButton>

      <CustomModal open={open} onClose={handleClose}>
        <Container>
          <ComposeText>
            <TextField
              fullWidth
              label="Recipient"
              variant="outlined"
              margin="normal"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />

            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              margin="normal"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <TextField
              fullWidth
              label="Body"
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={handleSend}>
              Send
            </Button>
          </ComposeText>
        </Container>
      </CustomModal>
    </div>
  );
};

export default ComposeEmail;
