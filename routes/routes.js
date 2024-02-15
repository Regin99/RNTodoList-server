import express from 'express';
import Model from '../model/model.js';
import bodyParser from 'body-parser';

const router = express.Router();

const jsonParser = bodyParser.json();

router.post('/todos', jsonParser, async (req, res) => {
  const data = new Model({
    title: req.body.title,
    description: req.body.description,
    isImportant: req.body.isImportant,
    isCompleted: req.body.isCompleted
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
    s;
  }
});

router.get('/todos', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/todos/:id', jsonParser, async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    await Model.findByIdAndUpdate(id, updatedData, options);
    res.status(200).json({
      message: 'Todo updated successfully'
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Model.findByIdAndDelete(id);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

export default router;
