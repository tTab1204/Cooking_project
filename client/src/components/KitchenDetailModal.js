import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { showModalState } from 'atoms/atoms';
import { successMessage } from 'utils/successMessage';

const KitchenDetailModal = ({ name, setShowSuccess }) => {
  const [showModal, setShowModal] = useRecoilState(showModalState);

  const onSubmit = () => {
    successMessage(setShowSuccess);

    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  const handleCancel = () => setShowModal(false);

  return (
    <Modal
      title="Contact Us"
      visible={showModal}
      footer={null}
      style={{ fontSize: '1.4rem' }}
      onCancel={handleCancel}
    >
      <Form layout="vertical">
        <p style={{ marginBottom: '1em', lineHeight: '200%' }}>
          Thank you for your interest in {name}. If you send us your e-mail,
          we'll get back to you as soon as possible!
        </p>
        <Form.Item label="Email" required>
          <Input
            placeholder="paka123@naver.com"
            style={{ marginBottom: '1.5rem' }}
          />
          <Button
            type="primary"
            size="large"
            style={{ width: '100%' }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default KitchenDetailModal;
