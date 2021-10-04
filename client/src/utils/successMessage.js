import { message } from 'antd';

export const successMessage = setShowSuccess => {
  const key = 'updatable';
  message.loading({ content: 'Loading...', key });

  setTimeout(() => {
    message.success({
      content: 'Success!',
      key,
      duration: 2,
    });
    setShowSuccess(true);
  }, 500);
};
