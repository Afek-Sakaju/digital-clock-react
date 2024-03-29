import { getDateFormat, assertTwoDigitsTimeUnits } from "../functions";

describe("functions tests", () => {
  describe("assertTwoDigitsTimeUnits tests", () => {
    test.each([
      [
        {
          hours: 9,
          minutes: 7,
          seconds: 1,
        },
        "09:07:01",
      ],
      [
        {
          hours: 20,
          minutes: 10,
          seconds: 5,
        },
        "20:10:05",
      ],
      [
        {
          hours: 15,
          minutes: 15,
          seconds: 15,
        },
        "15:15:15",
      ],
    ])(
      "function accepts time units:%s then returns time:%s",
      (timeUnits, result) => {
        expect(assertTwoDigitsTimeUnits(timeUnits)).toEqual(result);
      }
    );

    test.each([
      [
        {
          minutes: 15,
          seconds: 15,
        },
        "00:15:15",
      ],
      [
        {
          hours: 6,
        },
        "06:00:00",
      ],
      [{}, "00:00:00"],
    ])(
      "function accepts partial time units:%s then returns time:%s",
      (timeUnits, result) => {
        expect(assertTwoDigitsTimeUnits(timeUnits)).toEqual(result);
      }
    );

    describe("getDateFormat tests", () => {
      /* Note that the tests built for 'GMT+0300' locale time of israel
      and it may differentiate in other timezone */

      test.each([
        [
          1677237155,
          {
            day: "Tue",
            time: "11:53:57",
            ampm: "AM",
            timestamp: 1677237155,
            is24HoursMode: undefined,
          },
        ],
        [
          928977239155,
          {
            day: "Thu",
            time: "04:13:59",
            ampm: "AM",
            timestamp: 928977239155,
            is24HoursMode: undefined,
          },
        ],
        [
          1523977237155,
          {
            day: "Tue",
            time: "06:00:37",
            ampm: "PM",
            timestamp: 1523977237155,
            is24HoursMode: undefined,
          },
        ],
      ])(
        "function accepts timestamp:%s then returns date:%s",
        (timestamp, result) => {
          expect(getDateFormat(timestamp)).toEqual(result);
        }
      );

      test.each([[false], [null], [undefined]])(
        "function accepts timestamp:%s then returns current date",
        (timestamp) => {
          const date = new Date();
          const ampm = date.getHours() >= 12 ? "PM" : "AM";
          // eslint-disable-next-line no-unused-vars
          const [day, _month, _monthDay, _year, time] = date
            .toString()
            .split(" ");

          const result = {
            day,
            time,
            ampm,
            timestamp: date.getTime(),
            is24HoursMode: true,
          };

          expect(getDateFormat(timestamp, true)).toEqual(result);
        }
      );
    });
  });
});
