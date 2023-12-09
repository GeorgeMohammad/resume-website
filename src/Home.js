import { Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
      <nav>
        <ul>


          <br></br>
          <div class="row">
            <div class="col-md-1"></div>
            <Button href="projects" className="col" variant="success">Projects</Button>{' '}
            <div class="col-md-1"></div>
            <Button href="education" className="col" variant="success">Education</Button>{' '}
            <div class="col-md-1"></div>
            {/*<Button href="contact" className="col" variant="success">Contact</Button>{' '}
            <div class="col-md-1"></div>
            <Button href="hobbies" className="col" variant="success">Hobbies</Button>{' '}
  <div class="col-md-1"></div>*/}
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Home;
