interface ScheduleItem {
  begin: Date;
  end: Date;
  note?: string;
}

export const SCHEDULE: ScheduleItem[] = [
  {
    begin: new Date('2024-05-30T16:30:00'),
    end: new Date('2024-05-30T19:30:00'),
  },
  {
    begin: new Date('2024-06-06T16:30:00'),
    end: new Date('2024-06-06T19:30:00'),
  },
  {
    begin: new Date('2024-06-13T16:30:00'),
    end: new Date('2024-06-13T19:30:00'),
    note: 'グループ研究室2で活動',
  },
  {
    begin: new Date('2024-06-20T16:30:00'),
    end: new Date('2024-06-20T19:30:00'),
  },
  {
    begin: new Date('2024-06-27T16:30:00'),
    end: new Date('2024-06-27T19:30:00'),
  },
];

export function toDurationString(begin: Date, end: Date): string {
  const oneDay = 1000 * 60 * 60 * 24;
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  if (end.getTime() - begin.getTime() < oneDay) {
    return `${begin.toLocaleDateString('ja', dateOptions)} ${begin.toLocaleTimeString('ja', timeOptions)} - ${end.toLocaleTimeString('ja-JP', timeOptions)}`;
  } else {
    return `${begin.toLocaleDateString('ja', dateOptions)} ${begin.toLocaleTimeString('ja', timeOptions)} - ${end.toLocaleDateString('ja', dateOptions)} ${end.toLocaleTimeString('ja', timeOptions)}`;
  }
}
