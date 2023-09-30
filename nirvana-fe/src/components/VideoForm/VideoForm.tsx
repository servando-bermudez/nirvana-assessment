import { Input, Form, Modal } from "antd";

type FieldType = {
  name: string;
  url: string;
};

interface VideoFormProps {
  visible: boolean;
  onCreate: (values: FieldType) => void;
  setVisibility: (visible: boolean) => void;
}

const VideoForm: React.FC<VideoFormProps> = ({ visible, setVisibility, onCreate }) => {
  const [form] = Form.useForm();

  const handleCreate = () => {
    form.validateFields()
      .then((values) => {
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };


  return (
    <Modal
      open={visible}
      title="Add new video"
      okText="Ok"
      onCancel={() => {
        setVisibility(false);
      }}
      onOk={handleCreate}
    >
      <Form form={form} layout="vertical">
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input the video name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Youtube URL"
          name="url"
          rules={[
            {
              required: true,
              pattern: new RegExp(`(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))`), /* eslint-disable-line */
              message: 'Invalid Youtube URL'
            },
            { type: 'url', message: '' },
            { type: 'string', message: '' }
          ]}
        >
          <Input placeholder="https://www.youtube.com/watch?v=..." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default VideoForm;