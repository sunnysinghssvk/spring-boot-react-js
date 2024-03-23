import React, { useEffect } from 'react';
import { Card, CardImg, CardImgOverlay, CardText } from 'reactstrap';

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <Card>
        <CardImg
          alt="Homepage"
          src="/homepage.jpg"
          style={{
            height: 150
          }}
          width="100%"
        />
        <CardImgOverlay className='my-4'>
          <CardText style={{ color: 'black' }}>
            Welcome to Employee Management Application!
          </CardText>
          <CardText style={{ color: 'black' }}>
            Here you can view all employees, find specific ones by ID, add new employee and delete a employee profile effortlessly.
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default Home;