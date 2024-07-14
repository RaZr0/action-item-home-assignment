// import express from "express";
// import postsService from "../services/posts.service";
// import { AddPostDto, EditPostDto } from "../dto/posts.dto";
// const router = express.Router();

// router.get('/', async (req, res) => {
//     try {
//         const posts = await postsService.getAll();
//         res.json(posts).send();
//     }
//     catch (err) {
//         res.status(500).send();
//     }
// })


// router.post('/', async (req, res) => {
//     try {
//         const postDto: AddPostDto | undefined = req.body;

//         if (!postDto || !postDto.content || !postDto.userId) {
//             res.status(400).send();
//             return;
//         }

//         const post = await postsService.add(postDto);
//         if (typeof post === 'string') {
//             res.status(400).json(post);
//             return;
//         }
//         res.status(201).json(post);
//     }
//     catch (err) {
//         res.status(500).send(err);
//     }
// })


// router.delete('/:id', async (req, res) => {
//     try {
//         const deletedPost = await postsService.remove(Number(req.params.id));
//         if (deletedPost) {
//             res.status(204).send();
//             return;
//         }
//         res.status(404).send();
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// })

// router.patch('/:id', async (req, res) => {
//     try {
//         const postDto: EditPostDto | undefined = req.body;
//         if (!postDto || !postDto.content) {
//             res.status(400).send();
//             return;
//         }

//         const updatedPost = await postsService.update(Number(req.params.id), postDto);
//         if (!updatedPost) {
//             res.status(404).send();
//             return;
//         }
//         res.send();
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// })


// router.patch('/:id/like/:userId', async (req, res) => {
//     try {
//         const { id , userId } = req.params;
        
//         const updatedPost = await postsService.like(Number(id), Number(userId));

//         if (!updatedPost) {
//             res.status(404).send();
//             return;
//         }

//         if (typeof updatedPost === 'string') {
//             res.status(400).json(updatedPost);
//             return;
//         }

//         res.send();
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// })

// router.patch('/:id/dislike/:userId', async (req, res) => {
//     try {
//         const updatedPost = await postsService.dislike(Number(req.params.id), Number(req.params.userId));

//         if (!updatedPost) {
//             res.status(404).send();
//             return;
//         }

//         if (typeof updatedPost === 'string') {
//             res.status(400).json(updatedPost);
//             return;
//         }

//         res.send();
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// })

// router.get('/:id/users-like', async (req, res) => {
//     try {
//         const usersLike = await postsService.getPostUsersLike(Number(req.params.id));

//         if (!usersLike) {
//             res.status(404).send();
//             return;
//         }

//         res.json(usersLike);
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send(err);
//     }
// })



// export default router;