import welcomeImg from '../../Assets/welcome.png';

const Homepage = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Welcome to Student Management System</h1>
      <img src={welcomeImg} alt="Welcome" style={{ width: '500px',height:'350px',marginTop:'50px' }} />

    </div>
  );
};

export default Homepage;