const repl = require("repl");

const server = repl.start("custom> ");

function idToTimestamp(snowflakeId) {
  const timestamp = BigInt(snowflakeId) >> 22n;
  const twitterEpoch = 1288834974657n;
  return new Date(Number(timestamp + twitterEpoch));
}

function timestampToId(date) {
  const twitterEpoch = 1288834974657n;
  const ms = BigInt(date instanceof Date ? date.getTime() : date);
  return (ms - twitterEpoch) << 22n;
}

server.context.idToTimestamp = idToTimestamp;
server.context.timestampToId = timestampToId;
