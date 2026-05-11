export function jitter(target: number): number {
  const randomNumber = Math.random() * 300;

  return target + randomNumber;
}
