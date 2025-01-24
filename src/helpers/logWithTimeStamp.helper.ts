function logWithTimestamp(message: string): void {
  const now = new Date();
  const isoString = now.toISOString(); // ISO 8601 format time
  const humanReadable = now.toLocaleString(); // Human-readable format adjusted to local timezone
  console.log(`${isoString} - ${humanReadable} - ${message}`);
}

export default logWithTimestamp;
