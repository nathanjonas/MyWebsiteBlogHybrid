export default changeColor = (color, facialFeature) => {
  switch (facialFeature) {
    case "eyes":
      this.setState({
        eyeColor: color,
      });
      break;
    case "mouth":
      this.setState({
        mouthColor: color,
      });
      break;
    default:
      this.setState({
        faceColor: color,
      });
      break;
  }
};
