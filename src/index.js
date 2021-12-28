const { Client, Bulb } = require("tplink-smarthome-api");
const client = new Client();

const RED = 0;
const GREEN = 120;
const BLUE = 240;

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// getRandomIntInclusive
const randIntRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const randHue = () => {
  return randIntRange(0, 360);
};

const setColor = async (bulb, hue, saturation) => {
  await bulb.lighting.setLightState({
    transition_period: 0, // ms
    hue: hue,
    saturation: saturation,
    brightness: 80,
    color_temp: 0,
  });
};

const setWhiteTemp = async (bulb, temp) => {
  await bulb.lighting.setLightState({
    transition_period: 0, // ms
    brightness: 80,
    color_temp: temp,
  });
};

// (async () => {
//   const bulb1 = await client.getDevice({ host: "192.168.1.65", port: "9999" });
//   const bulb2 = await client.getDevice({ host: "192.168.1.104", port: "9999" });
//   const bulb3 = await client.getDevice({ host: "192.168.1.85", port: "9999" });
//   // const bulb4 = await client.getDevice({ host: "192.168.1.116", port: "9999" });

//   while (true) {
//     //
//     /*
//     setWhiteTemp(bulb1, 5300);
//     setWhiteTemp(bulb3, 5300);
//     setColor(bulb2, RED, 100);
//     await sleep(500);

//     setWhiteTemp(bulb1, 5300);
//     setWhiteTemp(bulb2, 5300);
//     setColor(bulb3, GREEN, 100);
//     await sleep(500);

//     setWhiteTemp(bulb2, 5300);
//     setWhiteTemp(bulb3, 5300);
//     setColor(bulb1, BLUE, 100);
//     await sleep(500); */

//     setColor(bulb1, RED, 100);
//     setColor(bulb2, GREEN, 100);
//     setColor(bulb3, BLUE, 100);
//     await sleep(500);
//     setColor(bulb1, BLUE, 100);
//     setColor(bulb2, RED, 100);
//     setColor(bulb3, GREEN, 100);
//     await sleep(500);
//     setColor(bulb1, GREEN, 100);
//     setColor(bulb2, BLUE, 100);
//     setColor(bulb3, RED, 100);
//     await sleep(500);
//   }

//   // await bulb1.lighting.setLightState({
//   //   transition_period: 500, // ms
//   //   hue: 0,
//   //   saturation: 100,
//   //   brightness: 100,
//   //   color_temp: 0,
//   // });
//   // await bulb2.lighting.setLightState({
//   //   transition_period: 500, // ms
//   //   hue: 120,
//   //   saturation: 100,
//   //   brightness: 100,
//   //   color_temp: 0,
//   // });
//   // await bulb3.lighting.setLightState({
//   //   transition_period: 500, // ms
//   //   hue: 240,
//   //   saturation: 100,
//   //   brightness: 100,
//   //   color_temp: 0,
//   // });
// })();

// client.startDiscovery().on("bulb-new", async (bulb) => {
//   let info = await bulb.getSysInfo();
//   // console.log(info);
//   console.log(await bulb.host);
//   console.log(await bulb.port);
// });

(async () => {
  const bulb = await client.getDevice({ host: "192.168.1.116", port: "9999" });

  await bulb.setPowerState(false);
  // await setColor(bulb, 295, 100);
})();
