import React from 'react'
import ProfileIcon from '../ProfileIcon'
import RepplyHandler from '../RepplyHandler'
import CommentItemHeader from './CommentItemHeader'
import { CommentItemWrapper, CommentItemText, CommentBody } from './style' 
import RepplyItem from '../RepplyItem'

class CommentItem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            repplyStatus: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.getRepplys = this.getRepplys.bind(this)
        this.getRepplyHandler = this.getRepplyHandler.bind(this)
        this.showRepplyHandler = this.showRepplyHandler.bind(this)
        this.hideRepplyHandler = this.hideRepplyHandler.bind(this)
    }

    getRepplyHandler() {
        if (this.state.repplyStatus){
            return (
                <RepplyHandler hideRepplyHandler={ this.hideRepplyHandler } commentId={this.props.data.id} addNewRepply={this.props.addNewRepply}/>
            )
        }

        return null
    }

    getRepplys() {
        const repplys = this.props.data?.repplys

        if (repplys) {
            return (
                <React.Fragment>
                    {this.props.data.repplys.map((e, i) =>  
                        <RepplyItem 
                            key={i} 
                            data={e}
                        />
                    )}
                </React.Fragment>
            )
        }

        return null
    }

    handleClick () {
        const { onClick } = this.props
        
        if (onClick) {
            onClick()
        }
    }

    showRepplyHandler() {
        this.setState({repplyStatus: true})
    }

    hideRepplyHandler() {
        this.setState({repplyStatus: false})
    }

    render(){
        const { text, tags } = this.props.data
        
        return (
            <React.Fragment>
                <CommentItemWrapper isRepply={this.props.isRepply} onClick={ this.handleClick } >
                    <CommentItemHeader tags={tags}/>
                    <CommentBody>
                        <ProfileIcon image={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                        <CommentItemText>{text}</CommentItemText>
                    </CommentBody>
                </CommentItemWrapper>
                {this.getRepplyHandler()}
                {this.getRepplys()}
            </React.Fragment>
        )
    }
}

export default CommentItem