import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';

function SectionName(props) {
  return (
    <div>
      <div align="left" className="PlayingAround">
        
      </div>
      <br></br>
      <div col-md-1></div>
      
      <Card className="offset-1 border text-white bg-primary"style={{ textAlign: 'left', width: '800px' }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="text-white">
          <pre>{props.text}</pre>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SectionName;