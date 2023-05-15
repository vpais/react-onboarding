import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h4" component="a" href="/" sx={{ fontWeight: 'bold', letterSpacing: '-0.5px', color: '#fff', textDecoration: 'none' }}>
            TV <span style={{ color: '#ff5722' }}>Hub</span>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;