
// import { PostModel, getPosts, writePosts } from '../models/post.model';
// import { AddPostDto, EditPostDto, PostDto } from '../dto/posts.dto';
// import usersService from './users.service';
// import { UserModel, getUsers } from '../models/user.model';


// async function getAll() {
//     const posts = await getPosts();
//     const users = await getUsers();
//     const postsDto: PostDto[] = [];
//     for (let index = 0; index < posts.length; index++) {
//         const post = posts[index];
//         const user = await usersService.get(post.userId) as UserModel;
//         postsDto.push({
//             content: post.content,
//             date: post.date,
//             id: post.id,
//             imageUrl: post.imageUrl,
//             user: user,
//             likes: post.likes || []
//         })
//     }
//     const postsByNewestDate = postsDto.sort((a, b) => {
//         if (new Date(a.date) < new Date(b.date)) {
//             return 1;
//         }

//         return -1;
//     })
//     return postsByNewestDate;
// }


// async function validatePostToAdd(post: AddPostDto): Promise<string | undefined> {
//     const user = await usersService.get(post.userId);
//     if (!user) {
//         return 'user not found';
//     }
// }


// async function add(post: AddPostDto): Promise<PostModel | string> {
//     const validationError = await validatePostToAdd(post);
//     if (validationError) {
//         return validationError;
//     }

//     const posts = await getPosts();
//     const lastPostId = posts[posts.length - 1]?.id;
//     const newPost: PostModel = {
//         id: lastPostId ? lastPostId + 1 : 1,
//         date: new Date().toISOString(),
//         ...post
//     };

//     posts.push(newPost);
//     await writePosts(posts);
//     return newPost;
// }


// async function remove(id: number): Promise<PostModel | undefined> {
//     const posts = await getPosts();
//     const postIndex = posts.findIndex(p => p.id === id);
//     if (postIndex === -1) {
//         return;
//     }

//     const deletedPost = posts.splice(postIndex, 1)[0];
//     await writePosts(posts);
//     return deletedPost;
// }

// async function update(id: number, post: EditPostDto): Promise<PostModel | undefined> {
//     const posts = await getPosts();
//     const postIndex = posts.findIndex(p => p.id === id);
//     if (postIndex === -1) {
//         return;
//     }

//     const updatedPost = posts[postIndex] = {
//         ...posts[postIndex],
//         ...post,
//         date: new Date().toISOString()
//     };
//     await writePosts(posts);
//     return updatedPost;
// }


// async function validateLike(userId: number, post: PostModel): Promise<undefined | string> {
//     if (!post.likes || !post.likes.length)
//         return;

//     const user = await usersService.get(userId);
//     if (!user) {
//         return 'user not found';
//     }

//     if (post.likes.find(uid => uid === userId)) {
//         return 'user already like this post';
//     }
// }

// async function validateDislike(userId: number, post: PostModel): Promise<undefined | string> {
//     const user = await usersService.get(userId);
//     if (!user) {
//         return 'user not found';
//     }

//     if (!post.likes?.find(uid => uid === userId)) {
//         return 'user like does not exist in this post';
//     }
// }


// async function like(postId: number, userId: number): Promise<PostModel | string | undefined> {
//     const posts = await getPosts();

//     const postIndex = posts.findIndex(p => p.id === postId);
//     if (postIndex === -1) {
//         return;
//     }


//     const validationError = await validateLike(userId, posts[postIndex]);
//     if (validationError) {
//         return validationError;
//     }


//     (posts[postIndex] as PostModel).likes = !posts[postIndex].likes || !posts[postIndex].likes?.length ? [userId] : [...(posts[postIndex] as PostModel).likes as number[], userId];
//     await writePosts(posts);
//     return posts[postIndex];
// }

// async function dislike(postId: number, userId: number): Promise<PostModel | string | undefined> {
//     const posts = await getPosts();

//     const postIndex = posts.findIndex(p => p.id === postId);
//     if (postIndex === -1) {
//         return;
//     }


//     const validationError = await validateDislike(userId, posts[postIndex]);
//     if (validationError) {
//         return validationError;
//     }


//     (posts[postIndex] as PostModel).likes = (posts[postIndex] as PostModel).likes?.filter(uid => uid !== userId);
//     await writePosts(posts);
//     return posts[postIndex];
// }



// async function getPostUsersLike(postId: number): Promise<UserModel[] | undefined> {
//     const posts = await getPosts();
//     const post = posts.find(p => p.id === postId);
//     if (!post) {
//         return;
//     }

//     if (!post.likes || !post.likes?.length) {
//         return [];
//     }

//     const users: UserModel[] = [];

//     for (let index = 0; index < post.likes.length; index++) {
//         const user = await usersService.get(post.likes[index]) as UserModel;
//         users.push(user);
//     }
//     return users;
// }


// export default {
//     getAll,
//     add,
//     remove,
//     update,
//     like,
//     dislike,
//     getPostUsersLike
// }