interface ScheduleItem {
  begin: Date;
  end: Date;
  note?: string;
}

export const SCHEDULE: ScheduleItem[] = [
  {
    begin: new Date('2024-07-04T16:30:00'),
    end: new Date('2024-07-04T19:30:00'),
  },
  {
    begin: new Date('2024-07-11T16:30:00'),
    end: new Date('2024-07-11T19:30:00'),
  },
  {
    begin: new Date('2024-07-18T16:30:00'),
    end: new Date('2024-07-18T19:30:00'),
  },
  {
    begin: new Date('2024-07-25T16:30:00'),
    end: new Date('2024-07-25T19:30:00'),
  },
  // {
  //   begin: new Date('2024-06-13T16:30:00'),
  //   end: new Date('2024-06-13T19:30:00'),
  //   note: 'グループ研究室2で活動',
  // },
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
