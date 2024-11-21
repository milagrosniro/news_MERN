export const isValidDate = (date: number) => Number.isInteger(date) && date > 0 && date < Date.now();
