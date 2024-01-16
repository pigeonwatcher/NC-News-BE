class Controller {

    constructor(model) {
        this.model = model;
    }

    async getTopics(req, res, next) {

        try {
            const { fetchAllTopics } = this.model;
            const topics = await fetchAllTopics();
            res.status(200).send({ topics });

        } catch(err) {
            next(err);
        }
    }

    async getEndpoints(req, res, next) {

        try {
            const { fetchAllEndpoints } = this.model;
            const endpoints = await fetchAllEndpoints();
            res.status(200).send({ endpoints });

        } catch(err) {
            next(err);
        }
    }

    async getArticle(req, res, next) {

        try {
            const { article_id:id } = req.params;
            const { fetchArticleByID } = this.model;
            const article = await fetchArticleByID(id);
            res.status(200).send({ article });

        } catch(err) {
            next(err);
        }
    }

    async getArticles(req, res, next) {

        try {
            const { fetchAllArticles } = this.model;
            const articles = await fetchAllArticles();
            res.status(200).send({ articles });
        } catch(err) {
            next(err);
        }
    }

    async getArticleComments(req, res, next) {

        try {
            const { article_id:id } = req.params;
            const { fetchCommentsByArticleID } = this.model;
            const comments = await fetchCommentsByArticleID(id);
            res.status(200).send({ comments });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = Controller;