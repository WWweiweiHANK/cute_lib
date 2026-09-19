// Responsibility is transaction data; rendering receives only visible book attributes.
export const returnCases = {
  A: {
    customerId: "return-reader-01",
    book: {
      id: "distant-lighthouse",
      title: "远方的灯塔",
      englishTitle: ["THE DISTANT", "LIGHTHOUSE"],
      art: "lighthouse",
      damageProfile: [
        {
          id: "scratch_cover_01",
          type: "scratch",
          location: "front_cover",
          page: 0,
          severity: 1,
          visible: true,
          uvRect: [0.65, 0.71, 0.2, 0.1],
        },
      ],
    },
    existingDamageBeforeLoan: [],
  },
  B: {
    customerId: "return-reader-02",
    book: {
      id: "city-rain",
      title: "城市里的雨",
      englishTitle: ["RAIN IN", "THE CITY"],
      art: "rain",
      damageProfile: [],
    },
    existingDamageBeforeLoan: [],
  },
};
