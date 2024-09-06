import PushNotification from 'react-native-push-notification';

export const initNotifications = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
};

export const scheduleNotification = (title: string, message: string, date: Date) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    date: date,
  });
};

export const cancelAllNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};