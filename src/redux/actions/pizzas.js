import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });
  axios
    .get(
      `http://localhost:3000/pizzas?${
        category !== null ? `category=${category}&_` : ""
      }
      &_sort=${sortBy}&_order=asc`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});