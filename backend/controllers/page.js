const { User, Post, Hashtag } = require('../models'); 
const { sequelize } = require('../models');

exports.renderProfile = (req, res) => {
    res.render('profile', { title: '내 정보 - NodeBird'});
};

exports.renderJoin = (req, res) => {
    res.render('Join', { title: '회원 가입 - NodeBird' });
};

exports.renderMain = async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User,
                attributes: ['id', 'nick'],
            },
            order: [['createdAt', 'DESC']],
        });

        const [result, metadata] = await sequelize.query('SELECT PostId, JSON_ARRAYAGG(UserId) as UserIds, COUNT(PostId) as likeCount \
                                                        FROM nodebird.like \
                                                        Group by PostId');
        console.log(result);

        res.render('main', {
            title: 'NodeBird',
            twits: posts,
            likes: result,
        });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
};

exports.renderHashtag = async (req, res, next) => {
    const query = req.query.hashtag;
    if (!query) {
        return res.redirect('/');
    }
    try {
        const hashtag = await Hashtag.findOne({ where: { title: query }});
        let posts = [];
        if (hashtag) {
            posts = await hashtag.getPosts({ 
                include: [{ model: User,attributes: ['id', 'nick'] }],
                order: [['createdAt', 'DESC']]
            });
        }

        return res.render('main', {
            title: `${query} | NodeBird`,
            twits: posts,
        });
    }
    catch (error) {
        console.error(error);
        return next(error);
    }
};