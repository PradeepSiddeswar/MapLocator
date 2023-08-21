
const placeDB = require('../Model/store_model');

exports.createPlace = async(req, res) => {
  try {
    const {name, latitude, longitude} = req.body;

    const place = new placeDB({
        name,
        location: {
            type:'Point',
            coordinates:[parseFloat(longitude), parseFloat(latitude)],
        }
    });
    await place.save();
    res.status(201).json(place);
  }  catch (error) {
    res.status(500).json({ error: 'An error occurred', details: error.message})
  }
};




// Example: Get nearby stores
exports.getNearbyStores = async (req, res) => {
    console.log('place:', placeDB)

  try {
    const { latitude, longitude } = req.query;

    const maxDistance = 10000;
    const places = await placeDB.find({
       
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: maxDistance, // Max distance in meters (adjust as needed)
        },
        
      },
    });

    if (!places || places.length === 0) {
        return res.status(404).json({ message: 'No nearby places found' });
      }

    res.json(places);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
};
