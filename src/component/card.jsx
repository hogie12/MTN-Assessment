import React from "react";
import { Card, Button } from "react-bootstrap";

export default function PostCard({ tittle, body }) {
  return (
    <Card >
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
