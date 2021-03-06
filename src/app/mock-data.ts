import { Eventbyday } from './eventbyday';

export const EVENTS: Eventbyday[] = [
  {
    date: new Date(2020, 5, 15),
    quantity: 7.5,
    price: 0,
    eventTypeName: 'Arbeidstid',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 8, 0, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 15, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 15),
    quantity: 1,
    price: 0,
    eventTypeName: 'Overtid',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 15),
    quantity: 1,
    price: 80,
    eventTypeName: 'Parkering',
    isExpenseType: true,
    isHoursEventType: false,
    isAdditionalHoursEventType: false,
    isWorkHour: false,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 9),
    quantity: 7.5,
    price: 0,
    eventTypeName: 'Arbeidstid',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: false,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 8, 0, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 15, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 10),
    quantity: 7.0,
    price: 0,
    eventTypeName: 'Leiebil',
    isExpenseType: true,
    isHoursEventType: false,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: false,
    isRejected: true,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 8, 0, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 15, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 11),
    quantity: 7.5,
    price: 0,
    eventTypeName: 'Arbeidstid',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 8, 0, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 15, 30, 0, 0),
  },

  {
    date: new Date(2020, 5, 11),
    quantity: 2,
    price: 650,
    eventTypeName: 'Liftleie dagpris',
    isExpenseType: true,
    isHoursEventType: false,
    isAdditionalHoursEventType: false,
    isWorkHour: false,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 11),
    quantity: 2.5,
    price: 650,
    eventTypeName: 'Liftleie timepris',
    isExpenseType: false,
    isHoursEventType: false,
    isAdditionalHoursEventType: true,
    isWorkHour: false,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 11),
    quantity: 6.5,
    price: 650,
    eventTypeName: 'Leiebil timepris',
    isExpenseType: false,
    isHoursEventType: false,
    isAdditionalHoursEventType: true,
    isWorkHour: false,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 12),
    quantity: 7.5,
    price: 0,
    eventTypeName: 'Arbeidstid',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 8, 0, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 15, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 12),
    quantity: 1,
    price: 0,
    eventTypeName: 'Overtid',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 12),
    quantity: 1,
    price: 499,
    eventTypeName: 'Leie av truck',
    isExpenseType: true,
    isHoursEventType: false,
    isAdditionalHoursEventType: false,
    isWorkHour: false,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 12),
    quantity: 6.5,
    price: 0,
    eventTypeName: 'Truckleie timepris',
    isExpenseType: false,
    isHoursEventType: false,
    isAdditionalHoursEventType: true,
    isWorkHour: false,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 12),
    quantity: 1,
    price: 40,
    eventTypeName: 'Parkering',
    isExpenseType: true,
    isHoursEventType: false,
    isAdditionalHoursEventType: false,
    isWorkHour: false,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
  {
    date: new Date(2020, 5, 12),
    quantity: 2,
    price: 0,
    eventTypeName: 'Timer parkert',
    isExpenseType: false,
    isHoursEventType: false,
    isAdditionalHoursEventType: true,
    isWorkHour: false,
    isApproved: true,
    isRejected: false,
    tasksCount: 1,
    firstTastStart: new Date(2020, 5, 29, 15, 30, 0, 0),
    lastTaskEnd: new Date(2020, 5, 29, 16, 30, 0, 0),
  },
];
