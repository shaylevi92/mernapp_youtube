const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');


// Routes
router.get('/', (req, res) => {

    BlogPost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router
  .get("/blog/:id", async (req, res) => {
    const { id } = req.params;
    const getBlog = await BlogPost.findOne({ _id: id });

    res.render("particularBlog", { BlogPost: getBlog });
  })

  .get("/delete/:id", (req, res) => {
    const { id } = req.params;
    BlogPost.deleteOne({ _id: id })
      .then(() => {
        console.log("Deleted blog successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })



router.post('/save', (req, res) => {
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});




router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});



module.exports = router;