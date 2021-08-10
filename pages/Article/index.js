import React from 'react'
import Navbar from '../../Interfaces/Navbar'
import { Presentation, Showcase, ArticleBase, ArticleContent, ArticleHeader } from './style'
import articles from '../../Helpers/ArticleHelpers/articleConstants.js'

class Article extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            hasSelectedArticle: false,
            selectedArticle: null
        }
        this.selectArticle = this.selectArticle.bind(this)
        this.unselectArticle = this.unselectArticle.bind(this)
    }

    selectArticle (index) {
        this.setState({ hasSelectedArticle: true, selectedArticle: index })
    }

    unselectArticle () {
        this.setState({ hasSelectedArticle: false, selectedArticle: null })
    }

    render () {
        return (
            <div>
                <Navbar history={this.props.history}/>
                { !this.state.hasSelectedArticle &&
                    <ListArticles select={this.selectArticle} />
                }
                { this.state.hasSelectedArticle && this.state.selectedArticle !== null &&
                    <DisplayedArticle article={articles.articles[this.state.selectedArticle]} return={this.unselectArticle} />
                }
            </div>
        )
    }
}

function ListArticles (props) {
    return (
        <Presentation>
            <h1>Artigos do <span className='primary-color'>Privatize Ja</span></h1>
            <Showcase>
                { articles.articles.map((article, index) => {
                    return (
                        <article className="card" key={index} onClick={() => props.select(index)}>
                            <img className="thumbnail" src={`articles/thumbnails/${article.archive}.png`} />
                            <p className="content">{article.title}</p>
                        </article>)
                })}
            </Showcase>
            <hr />
            <p className="small-paragraph">Feito por Christian - {new Date().getFullYear()}</p>
        </Presentation>
    )
}

class DisplayedArticle extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            html: '<p>loading...</p>'
        }
    }

    componentDidMount () {
        this.getContentArticle(this.props.article)
    }

    getContentArticle ({ archive }) {
        const target = `articles/${archive}.html`

        fetch(target)
            .then((resp) => resp.text())
            .then((data) => {
                this.setState({ html: data })
            })
    }

    render () {
        return (
            <ArticleBase>
                <ArticleHeader>
                    <span>{this.props.article.title}</span>
                    <button onClick={this.props.return}>voltar</button>
                </ArticleHeader>
                <ArticleContent className="content" dangerouslySetInnerHTML={{ __html: this.state.html }} />
            </ArticleBase>
        )
    }
}

export default Article
