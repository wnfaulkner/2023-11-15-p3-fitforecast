const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
    updateToken,
    updateProfile,
    index,
    refreshToken
};


async function updateProfile(req, res) {
  try {
    const userId = req.body.user._id;
    const updatedFields = {
      'location': req.body.location,
      'name': req.body.name,
      'email': req.body.email
    };

    const foundUser = await User.findByIdAndUpdate(
      userId, { $set: updatedFields }, { new: true });

    console.log('updated user in controller:', foundUser);
    res.status(200).json(foundUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// async function updateProfile(req, res) {
//   try {
//     // const updatedField = req.body;
//     const updatedZip = req.body.location;
//     const updatedName = req.body.name;
//     const updatedEmail = req.body.email;
//     const foundUser = await User.findOneAndUpdate(
//       // req.body.user._id,
//       { $set:{ 'location.$': updatedZip }},
//       { $set:{ 'name.$': updatedName }},
//       { $set:{ 'email.$': updatedEmail }},
//       {new: true}
//       );
//       console.log('updated user in controller:', foundUser)
//     res.status(200).json(foundUser);
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

async function index (req, res) {
  // console.log('Index function is being hit')
  try {
  const users = await User.find();
  // console.log(`users from controller: ${users}`)
  res.json(users)
  } catch (err) {
    console.log(err)
  }
}

async function updateToken(req, res) {
  try {
    const user = await User.findById(req.user._id);
    res.json(createJWT(user))
  } catch (err) {
    console.log(err)
  }
}

async function refreshToken(req, res) {
  try {
    const userId = req.query.userId;
    console.log('userID from controller', userId);

    // Revoke the current token (e.g., update the user's record in the database)

    // Generate a new token for the user
    const user = await User.findById(userId);
    const newToken = createJWT(user);

    res.json({ newToken });
  } catch (err) {
    console.error('Error refreshing token:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
  
async function create(req, res) {
  try {
    const user = await User.create(req.body);

    const token = createJWT(user);
    console.log(token);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Error()
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) throw new Error()
    res.json(createJWT(user))
  } catch (err) {
    console.log(err)
    res.status(400).json('Bad Credentials')
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

// Helper functions
function createJWT(user) {
  return jwt.sign(
    { user }, 
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

// async function updateLocation(req, res) {
//   try {
//       const updateProfile = req.body.location;
//       const foundUser = await User.findByIdAndUpdate(
//         req.body.user._id,
//         { location: updateProfile },
//         );
//       res.status(200).json(foundUser);
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// }