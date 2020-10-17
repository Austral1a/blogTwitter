import React, {useState} from 'react'
import {Button, Form, Input} from "antd";
import PropTypes from 'prop-types'
import {withTranslation} from 'react-i18next'

const CreatePostForm = ({
    onFinish,
    titleState,
    bodyState,
    onChangeTitle,
    onChangeBody,
    t
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
                label={t('postsSection.newPost.title')}
                name="title"
                rules={[
                    {
                        required: true,
                        message: t('postsSection.newPost.ruleTitle'),
                    },
                ]}
            >
                <Input value={titleState} onChange={onChangeTitle} />
            </Form.Item>

            <Form.Item
                label={t('postsSection.newPost.body')}
                name="body"
                rules={[
                    {
                        required: true,
                        message: t('postsSection.newPost.ruleBody'),
                    },
                ]}
            >
                <Input value={bodyState} onChange={onChangeBody} />
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    {t('btnActions.submit')}
                </Button>
            </Form.Item>
        </Form>
    )
}

CreatePostForm.propTypes = {
    onFinish: PropTypes.func.isRequired,
    titleState: PropTypes.string.isRequired,
    bodyState: PropTypes.string.isRequired,
    onChangeTitle: PropTypes.func.isRequired,
    onChangeBody: PropTypes.func.isRequired,
}

const CreatePostWithTranslation = withTranslation()(CreatePostForm)

export default CreatePostWithTranslation
