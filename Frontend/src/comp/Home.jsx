import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const products=[
        {
          "product_title": "Laptop",
          "product_img_url": "https://via.placeholder.com/300x200/FFA500/000000?text=Laptop",
          "Description": "Powerful laptop with high performance",
          "Product_price": 999
        },
        {
          "product_title": "Smartphone",
          "product_img_url": "https://via.placeholder.com/300x200/00FF00/000000?text=Smartphone",
          "Description": "Latest smartphone with advanced features",
          "Product_price": 599
        },
        {
          "product_title": "Headphones",
          "product_img_url": "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Headphones",
          "Description": "Wireless headphones with noise cancellation",
          "Product_price": 149
        },
        {
          "product_title": "Watch",
          "product_img_url": "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Watch",
          "Description": "Stylish wristwatch with various functionalities",
          "Product_price": 299
        },
        {
          "product_title": "Camera",
          "product_img_url": "https://via.placeholder.com/300x200/FFFF00/000000?text=Camera",
          "Description": "Professional DSLR camera for photography enthusiasts",
          "Product_price": 899
        },
        {
          "product_title": "Speaker System",
          "product_img_url": "https://via.placeholder.com/300x200/00FFFF/000000?text=Speakers",
          "Description": "High-quality speakers for immersive sound experience",
          "Product_price": 399
        },
        {
          "product_title": "Tablet",
          "product_img_url": "https://via.placeholder.com/300x200/800080/FFFFFF?text=Tablet",
          "Description": "Portable tablet for work and entertainment",
          "Product_price": 449
        },
        {
          "product_title": "Gaming Console",
          "product_img_url": "https://via.placeholder.com/300x200/008080/FFFFFF?text=Console",
          "Description": "Next-gen gaming console for ultimate gaming",
          "Product_price": 549
        },
        {
          "product_title": "Backpack",
          "product_img_url": "https://via.placeholder.com/300x200/800000/FFFFFF?text=Backpack",
          "Description": "Durable backpack for everyday use",
          "Product_price": 79
        },
        {
          "product_title": "Fitness Tracker",
          "product_img_url": "https://via.placeholder.com/300x200/FF00FF/FFFFFF?text=Tracker",
          "Description": "Track your fitness activities with this smart tracker",
          "Product_price": 129
        },
        {
          "product_title": "Coffee Maker",
          "product_img_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D/400x400",
          "Description": "Automatic coffee maker for brewing delicious coffee",
          "Product_price": 199
        },
        {
          "product_title": "Desk Lamp",
          "product_img_url": "https://via.placeholder.com/300x200/000080/FFFFFF?text=Desk+Lamp",
          "Description": "Adjustable desk lamp for bright illumination",
          "Product_price": 49
        }
      ];

  return (
    <>
    <Container style={{marginTop:"3rem"}}>
      <Row>
      {
      products.map((a) => {
        return(
          <>
          <Col md={4} className='mb-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={a.product_img_url} />
            <Card.Body>
              <Card.Title>{a.product_title}</Card.Title>
              <Card.Text>
                {a.Description}
              </Card.Text>
              <Card.Text>
                {a.Product_price}
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        </>
        )
        }
      )
    }
      </Row>
    </Container>
    
  </>
  )
}

export default Home