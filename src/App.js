import React from 'react';
import propTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

const foodILike = [
  {
    id: '1',
    name: 'Kimchi',
    image:
      'https://www.google.com/search?q=%EA%B9%80%EC%B9%98&sxsrf=ALeKk00IVxQ2BA24nh-N790PmVTsdWkujA:1597809632587&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjBrcbcsKbrAhWmyYsBHXV1Dt4Q_AUoAXoECBcQAw&biw=958&bih=927#imgrc=RnBfod6PBFjCBM',
  },
  {
    id: '2',
    name: 'Samgyeopsal',
    image:
      'https://www.google.com/search?q=%EC%82%BC%EA%B2%B9%EC%82%B4&tbm=isch&ved=2ahUKEwjcqa7dsKbrAhUCzYsBHTDODDUQ2-cCegQIABAA&oq=%EC%82%BC%EA%B2%B9%EC%82%B4&gs_lcp=CgNpbWcQAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECdQ_HxY6oUBYO6GAWgBcAB4AIABc4gBjweSAQM1LjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=4qM8X9ywEYKar7wPsJyzqAM&bih=927&biw=958',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Bibimbap',
    image:
      'https://www.google.com/search?q=%EB%B9%84%EB%B9%94%EB%B0%A5&tbm=isch&ved=2ahUKEwit0ZfmsKbrAhUHgpQKHcfPA6AQ2-cCegQIABAA&oq=%EB%B9%84%EB%B9%94%EB%B0%A5&gs_lcp=CgNpbWcQAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBOgcIIxDqAhAnUIt0WMmDAWDyhAFoA3AAeAGAAW2IAeUHkgEDNS41mAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=9KM8X62HMIeE0gTHn4-ACg&bih=927&biw=958',
    rating: 5.0,
  },
  {
    id: '4',
    name: 'Kimbap',
    image:
      'https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&tbm=isch&ved=2ahUKEwiet-DusKbrAhVF35QKHRstBRcQ2-cCegQIABAA&oq=%EA%B9%80%EB%B0%A5&gs_lcp=CgNpbWcQAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEAM6CAgAELEDEIMBOgQIIxAnUMtTWPpXYLpZaABwAHgAgAGAAYgB-QSSAQMyLjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=BqQ8X56cLsW-0wSb2pS4AQ&bih=927&biw=958',
    rating: 4.4,
  },
  {
    id: '5',
    name: 'Doncasu',
    image:
      'https://www.google.com/search?q=%EB%8F%88%EA%B9%8C%EC%8A%A4&tbm=isch&ved=2ahUKEwj-gdT0sKbrAhWNL6YKHc4IAlsQ2-cCegQIABAA&oq=%EB%8F%88%EA%B9%8C%EC%8A%A4&gs_lcp=CgNpbWcQAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQ7T1Y2kRg_EVoAXAAeAGAAXKIAdEFkgEDMy40mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=E6Q8X76sCI3fmAXOkYjYBQ&bih=927&biw=958',
    rating: 4.1,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
