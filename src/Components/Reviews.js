import axios from "axios";
import { useState, useEffect } from "react";
// We want the FRONT END route params. This way, they can go to
// animes/3 and get all the reviews that belong to anime 3.
import { useParams } from "react-router-dom";
import Review from "./Review";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    // REST API grammar
    // GET to http://localhost:3003/anime/:id/reviews
    axios
      .get(`${API}/anime/${id}/reviews`)
      .then((response) => setReviews(response.data))
      .catch((error) => console.warn(error));
  }, [id]);

  return (
    <section class="Reviews">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </section>
  );
}

export default Reviews;
