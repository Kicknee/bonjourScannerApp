export function examineEntry(entry: string | number): string | number {
  if (typeof entry === "string") {
    return entry == "SHIPPING_COMPANY"
      ? "SHIPPING CO."
      : entry.length > 11
      ? `${entry.substring(0, 10)}...`
      : entry;
  } else {
    return entry;
  }
}
