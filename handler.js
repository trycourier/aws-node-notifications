"use strict";

const { CourierClient } = require("@trycourier/courier");

const courier = CourierClient();

module.exports.notify = async (event) => {
  try {
    const input =
      typeof event.body === "string" ? JSON.parse(event.body) : null;
    const body = await courier.send(
      input !== null && typeof input === "object" ? input : {}
    );

    return { statusCode: 200, body: JSON.stringify(body) };
  } catch (error) {
    return {
      statusCode: error.response?.data?.status || error.response?.status || 400,
      body: JSON.stringify({
        error:
          error.response?.data?.message ||
          error.response?.statusText ||
          "Bad Request",
      }),
    };
  }
};
