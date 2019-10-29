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

module.exports = router;