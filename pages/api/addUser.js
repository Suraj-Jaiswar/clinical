// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/mongodb";
import User from "../../models/user";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { firstName, lastName, contactNo, email, description } = req.body;
    if (!firstName || !lastName || !contactNo)
      return res
        .status(400)
        .json({ msg: "Mandatory parameters missing", errorCode: 1 });
    try {
      const fetchedUser = await User.find({
        $or: [{ contactNo }, { email }],
      });
      if (fetchedUser.length>0)
        return res
          .status(400)
          .json({ msg: "Data already present", errorCode: 1 });
      const user = new User({
        firstName,
        lastName,
        contactNo,
        email,
        description,
      });
      const userCreated = await user.save();
      return res.status(200).json({
        msg: "User created Successfully",
        user: userCreated,
        errorCode: 0,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error.message, errorCode: 1 });
    }
  }
};

export default connectDB(handler);
