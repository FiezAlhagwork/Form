/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const Dailog = ( {open,setOpen,ERROR}) => {

  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    borderReduis:"10px",
    boxShadow: 24,
    p: 4,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  };  

  
  return (
    <>
      <div>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant="h6" sx={{ mt: 2,color:ERROR.color,fontWeight:"bold",fontSize:"25px" }}>
               {ERROR.error}
            </Typography> 
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Dailog;
