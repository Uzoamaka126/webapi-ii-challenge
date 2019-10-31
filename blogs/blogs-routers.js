const express = require('express');
const router = express();
const Blogs = require('./db');

// Get all Posts
router.get('/', (req, res) => {
    Blogs.find(req.query)
        .then(blogs => {
            res.status(200).json(blogs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error retrieving blog posts',
            });
        });
})

// Get Single Post
router.get('/:id', (req, res) => {
    Blogs.findById(req.params.id)
        .then(post => {
            if(post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({
                    message: 'Post not found'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Post could not be retrieved',
            });
        });
})

// Create a new post
router.post('/', (req, res) => {
    const newPost = {
        title: req.body.title,
        contents: req.body.contents,
        created_at: 'now',        
    };
    Blogs.insert(newPost)
    .then(data => {
        // console.log(data);
            res.status(201).json(data);
    })
    .catch(err => {
        // log error to the database
        console.log(err);
        res.status(500).json({
            message: 'An error occured when adding a new post',
        });
    });
});

// Delete a selected post
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Blogs.remove(id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({
                    message: "The Post has been taken down!"
                })
            } else {
                res.status(404).json({
                    message: 'The Post could not be found'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error remving the post',
            })
        })
});

// Edit a selected post
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    Blogs.update(id, updates)
        .then(blog => {
            if (blog) {
                res.status(200).json({
                    message: 'Post has been successfully updated',
                    blog
                });
            } else {
                res.status(404).json({
                    message: 'The Post could not be found'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error updating the post'
            });
        });
});

// Post a new comment
router.post('/:id/comments', (req, res) => {
    // const newComment = {
    //     title: req.body.title,
    //     post_id: req.body.contents,
    //     created_at: 'now',        
    // };

    Blogs.insertComment(req.body)
        .then(data => {
            console.log(data);
            res.status(201).json({
                message: 'New comment successfully added',
                data
            });
        })
        .catch(err => {
            // log error to the database
            console.log(err);
            res.status(500).json({
                message: 'An error occured when adding a new comment',
            });
        });
});

router.get('/:id/comments', (req, res) => {
    const { id } = req.params;
    Blogs.findCommentById(id)
        .then(singleComment => {
            if (singleComment.length > 0) {
                res.status(200).json(singleComment);
            } else {
                res.status(404).json({
                    message: 'Post not found'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error retrieving comments',
            });
        });
});
module.exports = router;