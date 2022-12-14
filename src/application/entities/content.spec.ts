import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Hello World');
    expect(content.value).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characteres', () => {
    expect(() => new Content('das')).toThrow();
  });

  it('should not be able to create a notification content with more than 255 characteres', () => {
    expect(() => new Content('a'.repeat(256))).toThrow();
  });
});
