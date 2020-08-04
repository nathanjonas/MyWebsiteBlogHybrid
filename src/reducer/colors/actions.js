const colorsUrl = "https://api.color.pizza/v1/?goodnamesonly=true";

export const SET_COLORS = "SET_COLORS";

export function getColors() {
  return (dispatch) =>
    fetch(colorsUrl)
      .then((res) => res.json())
      .then((res) => res.colors)
      .then((colors) => dispatch(setColors(colors)));
}

export function setColors(colors) {
    return {
        type: SET_COLORS,
        colors
    };
}