import React from 'react';
import { Container } from 'react-bootstrap';
import TodayMeal from '../components/todayMeal';
import Carousel from '../components/carousel';

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Container>
        <TodayMeal />
      </Container>
    </>
  );
}
