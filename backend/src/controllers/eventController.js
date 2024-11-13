const Event = require('../models/eventModel')

// basic CRUD operations for events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.json(events).status(200)
    } catch (error) {
        console.log('Error getting events:', error);
        res.status(500).json({ message: 'Error getting events' });
    }
}

const getEvent = async (req, res) => {
    try {
        const { id } = req.params
        const event = await Event.findById(id)
        if(!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event).status(200)
    } catch (error) {
        console.log('Error getting event:', error);
        res.status(500).json({ message: 'Error getting event' });
    }
}

const createEvent = async (req, res) => {
    try {
        const newEvent = new Event(req.body)

        await newEvent.save()

        res.json(newEvent).status(201)
    } catch (error) {
        console.log('Error creating event:', error);
        res.status(500).json({ message: 'Error creating event' });
    }
}

const updateEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true });

        if(!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(updatedEvent).status(200)
    } catch (error) {
        console.log('Error updating event:', error);
        res.status(500).json({ message: 'Error updating event' });
    }
}

const deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id)
        if(!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(deletedEvent).status(200)
    } catch (error) {
        console.log('Error deleting event:', error);
        res.status(500).json({ message: 'Error deleting event' });
    }
}

module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
}