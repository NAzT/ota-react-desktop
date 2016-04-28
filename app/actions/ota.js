export const UPGRADE_FIRMWARE = 'UPGRADE_FIRMWARE';
export const MQTT_ON_MESSAGE = 'MQTT_ON_MESSAGE';

let mqtt = require("mqtt");

var client = mqtt.connect('mqtt://mqtt.espert.io');

export function on_message() {
  return {
    type: MQTT_ON_MESSAGE
  };
}

client.on("connect", () => {
  console.log("MQTT CONNECTED", arguments);
});

client.on("message", (topic, message) => {
  console.log(topic, message.toString());

});

export function _upgradeFirmware() {
  return {
    type: UPGRADE_FIRMWARE
  };
}

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//       dispatch(on_message());
//   }
// }

export function upgradeFirmware(firmware = 1, clientTopic) {
  return dispatch => {
    console.log("UPGRADING FIRMWARE ...", firmware);
    // if (firmware == 1) {
    console.log("FIRMWARE = ", firmware)
    var json_out = {"OTA": "http://cmmc.xyz/firmware" + firmware + ".bin"};

    var opts = {};
    var callback = () => {
      console.log("PUBLISHED: ", arguments);
    };
    var topic = "ESPert/" + (clientTopic || "14346557") + "/Command";
    console.log("TOPIC= ", topic);
    client.publish(topic, JSON.stringify(json_out), opts, callback);
    // }
    dispatch(_upgradeFirmware());
  };
}
