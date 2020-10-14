import React, {useState} from 'react'
import {Button, Form, Input} from "antd";

const CreatePostForm = ({
    onFinish,
    titleState,
    bodyState,
    onChangeTitle,
    onChangeBody,
}) => {

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    }
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    }

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input title!',
                    },
                ]}
            >
                <Input value={titleState} onChange={onChangeTitle} />
            </Form.Item>

            <Form.Item
                label="Body"
                name="body"
                rules={[
                    {
                        required: true,
                        message: 'Please input body!',
                    },
                ]}
            >
                <Input value={bodyState} onChange={onChangeBody} />
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreatePostForm
