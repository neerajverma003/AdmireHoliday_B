import itinerary from '../models/itinerary.model.js';

export const getAllItinerary = async (req, res) => {
  try {
    const data = await itinerary.find({}).lean();
    if (!data) {
      return res.status(404).json({ message: 'No Itinerary Found' });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};




export const getExclusivePackages = async (req, res) => {
  try {
    // const data = await itinerary.find({ classification: { $in: ['Exclusive'] } }).lean();
    const data = await itinerary
      .find({ classification: 'Exclusive' })
      .select('_id title pricing duration destination_detail destination_thumbnails media')
      .lean();

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No Exclusive Packages Found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// for getweekendTrading


export const getWeekendTrendingPackages = async (req, res) => {
  try {
    const data = await itinerary
      .find({
        $and: [
          { classification: { $elemMatch: { $regex: /weekend/i } } },
          { classification: { $elemMatch: { $regex: /trending/i } } },
        ],
      })
      .select('_id title pricing duration destination_detail destination_thumbnails')
      .limit(4)
      .lean();

    res.status(200).json(data);
  } catch (error) {
    console.error('Weekend API Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



// export const getWeekendTrendingPackages = async (req, res) => {
//   try {
//     const data = await itinerary.find({
//       classification: { $all: ['Weekend', 'Trending'] },
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };


// for weekend gateway


// export const getWeekendGatewayDestinations = async (req, res) => {
//   try {
//     const data = await itinerary
//       .find({
//         classification: { $in: ['Weekend-Gateway'] },
//       })
//       .select('_id title pricing duration destination_detail destination_thumbnails media')
//       .limit(4)
//       .lean();

//     if (!data || data.length === 0) {
//       return res.status(404).json({ message: 'No Weekend Gateway Destinations Found' });
//     }

//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Weekend Gateway API Error:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };


export const getWeekendGatewayDestinations = async (req, res) => {
  try {
    const data = await itinerary
      .find({
        classification: { $elemMatch: { $regex: /weekend/i } },
      })
      .select('_id title pricing duration destination_detail destination_thumbnails media')
      .lean();

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No Weekend Gateway Destinations Found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Weekend Gateway API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};





//for getInternational 

export const getInternationalItinerary = async (req, res) => {
  try {
    const data = await itinerary.find({ domestic_or_international: 'international' });

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No International Itinerary Found' });
    }

    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};
