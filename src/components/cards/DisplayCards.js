import React from "react";

import "./cards.css";

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} />
    </div>
  );
};

const CardGrid = ({ data }) => {
  return (
    <div className="card-grid">
      {data.map((item) => (
        <Card key={item.id} image={item.image} />
      ))}
    </div>
  );
};
export default function cardsMap() {
  const data = [
    {
      id: 1,
      title: "Card 1",
      image: "https://picsum.photos/id/1/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Card 2",
      image: "https://picsum.photos/id/2/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Card 3",
      image: "https://picsum.photos/id/3/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Card 3",
      image: "https://picsum.photos/id/3/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      title: "Card 3",
      image: "https://picsum.photos/id/3/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "Card 3",
      image: "https://picsum.photos/id/3/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return <CardGrid data={data} />;
}
