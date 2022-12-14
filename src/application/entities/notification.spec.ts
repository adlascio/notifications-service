import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New notification'),
      category: 'notification_test',
      recipientId: 'example-recipent-id',
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
  it('should be able to create a notification without createdAt', () => {
    const notification = new Notification({
      content: new Content('New notification'),
      category: 'notification_test',
      recipientId: 'example-recipent-id',
    });

    expect(notification).toBeTruthy();
  });
});
