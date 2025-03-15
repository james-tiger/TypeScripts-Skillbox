'use client';

import Navigation from '@/components/Navigation';
import { Button, Form, Input } from 'antd';

export default function Contact() {
  const handleSubmit = (values: any) => {
    console.log('Form submitted:', values);
    // In a real app, you would send this data to a server
  };

  return (
    <div className="container">
      <Navigation />
      <div className="page contact-page">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any inquiries.</p>
        
        <div className="contact-form">
          <h2>Contact Form</h2>
          <Form onFinish={handleSubmit} layout="vertical">
            <Form.Item 
              label="Name" 
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item 
              label="Email" 
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item 
              label="Message" 
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={5} />
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
        
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
      </div>
    </div>
  );
} 