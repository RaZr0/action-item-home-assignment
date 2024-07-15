import express from "express";
import { AddUserDto } from "../dtos/add-user.dto";
import usersService from "../services/users.service";
import { UpdateUserDto } from "../dtos/update-user.dto";
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await usersService.getAll();
        res.json(users);
    }
    catch (err) {
        console.error(err);
        res.status(500).send();
    }
})


router.post('/', async (req, res) => {
    try {
        const user: AddUserDto = req.body;
        if (!req.body)
            throw 'no body';
        await usersService.add(user);
        res.status(201).send();
    }
    catch (err) {
        res.status(500).send(err);
    }
})


router.patch('/:id', async (req, res) => {
    try {
        const user: UpdateUserDto = req.body;
        const { id } = req.params;

        if (!req.body)
            throw 'no body';
        await usersService.update(id, user);
        res.status(200).send();
    }
    catch (err) {
        res.status(500).send(err);
    }
})



router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await usersService.remove(id);
        res.send();
    }
    catch (err) {
        console.error(err);
        res.status(500).send();
    }
})

export default router;