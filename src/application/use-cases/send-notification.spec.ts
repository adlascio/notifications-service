import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      category: 'notification_test',
      content: 'New notification',
    });

    expect(notification).toBeTruthy();
  });
});
