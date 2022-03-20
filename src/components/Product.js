import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Product = ({ items }) => {
    return (
        items.map((prod) => (
            <Card className="m-4 text-center" key={prod.id} style={{ width: '18rem' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src={prod.imageUrl} />
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem> Category : {prod.category}</ListGroupItem>
                        <ListGroupItem> Price : {prod.price}&#8377;</ListGroupItem>
                        <ListGroupItem> Size : {prod.size}</ListGroupItem>
                        <ListGroupItem> Brand : {prod.brand}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        ))
    )
}

export default Product