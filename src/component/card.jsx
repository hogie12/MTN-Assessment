import React from "react";
import { Card, Button } from "react-bootstrap";

export default function PostCard({ tittle, body }) {
  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  );
}
