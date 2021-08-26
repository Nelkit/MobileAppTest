import * as Notifications from 'expo-notifications';

export default {
    async sendLocalNotification(title: string, body: string) {
        await Notifications.scheduleNotificationAsync({
            content: {
              title: title,
              body: body,
            },
            trigger: { seconds: 1 },
        });
    }, 
}