export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function calcHour(time: number) {
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(new Date(time));

  return formattedTime;
}
