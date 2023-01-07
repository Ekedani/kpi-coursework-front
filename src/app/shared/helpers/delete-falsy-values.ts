export function deleteFalsyValues(obj: object): { [key: string]: any } {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}
