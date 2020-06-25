let DestinationList = [];

DestinationList.push(
  {
    CountryName: "USA",
    Areas: [
      {
        AreaName: "Ohio",
        SubAreas: [{ SubAreaName: "Cincinnati" }, { SubAreaName: "Cleveland" }],
      },
      {
        AreaName: "Colorado",
        SubAreas: [{ SubAreaName: "Denver" }, { SubAreaName: "Boulder" }],
      },
    ],
  },
  {
    CountryName: "China",
    Areas: [
      {
        AreaName: "Chongqing"
      },
      {
        AreaName: "Xian"
      },
    ],
  }
);

export default DestinationList;
