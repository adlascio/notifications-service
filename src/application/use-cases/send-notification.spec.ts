import { SendNotification } from './send-notification';
import { Notification } from '../entities/notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      recipientId: 'example-recipient-id',
      category: 'notification_test',
      content: 'New notification',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
