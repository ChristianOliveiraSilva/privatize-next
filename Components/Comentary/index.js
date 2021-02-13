import React, { useState, useRef } from 'react'
import { Icon, Content, Text, CommentBody, MainBody, Coments, Comment, DateInformation, Replys, Rep, Options, TextArea, Tags, CommentContainer, TagContainer } from './style'
import Flex from '../../Global/Style'
import Button from '../Button'
import ReplyComponent from './Reply'
import ProfileImage from '../../Assets/User.svg'
import { store } from 'react-notifications-component'
import { isEmpty } from '../../Helpers'
import CheckBox from '../../Components/Checkbox'
import Tag from '../Tag'
import tagConstants from '../Tag/Helpers/tagConstants'

const tagCheckboxes = [
    {
        text: 'A favor',
        type: tagConstants.tagTypes.IN_FAVOR
    },
    {
        text: 'Contra',
        type: tagConstants.tagTypes.AGAINST
    },
    {
        text: 'Reclamação',
        type: tagConstants.tagTypes.COMPLAINT
    },
    {
        text: 'Elogio',
        type: tagConstants.tagTypes.COMPLIMENT
    },
    {
        text: 'Experiência',
        type: tagConstants.tagTypes.EXPERIENCE
    }
]

function Comentary () {
    const mockText = 'Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.'

    const mainTextArea = useRef()
    const replyTextArea = useRef()

    const [comentaryId, setComentaryId] = useState()
    const [checkedTags, setCheckedTags] = useState([])

    const initialValue = [
        {
            image: ProfileImage,
            text: mockText,
            reply: false,
            tags: [tagConstants.tagTypes.IN_FAVOR, tagConstants.tagTypes.COMPLAINT],
            replies: [
                {
                    image: ProfileImage,
                    text: 'TESTE'
                }
            ]
        }
    ]
    const [comments, setComents] = useState(initialValue)

    const disableAllReplies = () => {
        comments.forEach(coment => {
            coment.reply = false
        })
    }

    function enableReply (i) {
        disableAllReplies()

        setComentaryId(i)
        comments[i].reply = true
        setComents([...comments])
    }

    const disableReply = () => {
        disableAllReplies()
        setComents([...comments])
    }

    const addComent = () => {
        const commentText = mainTextArea.current.value

        if (!isEmpty(commentText)) {
            comments.unshift({
                image: ProfileImage,
                text: commentText,
                tags: checkedTags,
                reply: false,
                replies: []
            })

            setComents([...comments])
        } else {
            store.addNotification({
                title: 'Atenção',
                message: 'Escreva algo para comentar',
                type: 'warning',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 2000,
                    onScreen: true
                }
            })
        }
    }

    const addReply = () => {
        const replyText = replyTextArea.current.value
        if (!isEmpty(replyText)) {
            comments[comentaryId].replies.push({ image: null, text: replyText })
            setComents([...comments])
        } else {
            store.addNotification({
                title: 'Atenção',
                message: 'Escreva algo para comentar',
                type: 'warning',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 2000,
                    onScreen: true
                }
            })
        }
    }

    const getTags = ({ tags }) => {
        if (tags.length > 0) {
            return (
                <TagContainer>
                    <Tag data={tags} />
                </TagContainer>
            )
        }
        return null
    }

    const repliesToHtml = (replies) => {

        if (replies.length > 0) {
            return (
                <Replys>
                    {replies.map(function (e, i) {
                        return (
                            <div key={i} id="bodyContainer">
                                <CommentBody >
                                    <Icon src={e.image} />
                                    <Text>{e.text}</Text>
                                </CommentBody>
                            </div>
                        )
                    })}
                </Replys>
            )
        }
        return null
    }

    const Comments = () => {
        return (
            <Coments>
                {comments.map(function (comment, i) {
                    return (
                        <Comment style={{ marginTop: '20px' }} key={i}>
                            <CommentContainer>
                                {getTags(comment)}
                                <CommentBody onClick={() => enableReply(i)}>
                                    <Icon src={comment.image} />
                                    <Text>{comment.text}</Text>
                                </CommentBody>
                            </CommentContainer>
                            {comment.reply ? <ReplyComponent reference={ replyTextArea } addReply={ addReply } disableReply={ disableReply } /> : null}
                            {repliesToHtml(comment.replies)}
                        </Comment>
                    )
                })}
            </Coments>
        )
    }

    return (
        <Content>
            <Rep>
                <Tags>
                    {tagCheckboxes.map((tagCheckbox, i) => <CheckBox key={i} value={tagCheckbox.type} addValue={setCheckedTags} text={tagCheckbox.text} />)}
                </Tags>
                <MainBody>
                    <Icon src={ProfileImage} />
                    <TextArea ref={ mainTextArea } width='90%' />
                </MainBody>
                <Options>
                    <Button
                        hoverBackgroundColor="#EEEEEE"
                        onClick={ addComent }
                        width='120px'
                        height='40px'
                        text='Comentar'
                        rounded
                    />
                </Options>
            </Rep>
            <Comments/>
        </Content>
    )
}

export default Comentary
