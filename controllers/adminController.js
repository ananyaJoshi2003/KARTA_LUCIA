const Admin = require('../models/admin');
const Blog = require('../models/blog');
const { sendSuccessResponse, sendFailureResponse } = require('../helpers/responseHelper');
const { generateToken } = require('../helpers/jwtUtils');

const expiresIn = '1h';

const createAdmin = async (req, res) => {
  try {
    const { email, password, fullName, role, isActive } = req.body;

    const admin = new Admin({ email, password, fullName, role, isActive });
    await admin.save();

    return sendSuccessResponse(res, 'Admin created successfully', admin, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const loginAdmin = async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne( {
    email, 
    password, 
   } ).sort({ createdAt: -1 }).exec();

   if (!admin) {
    return sendFailureResponse(res, 'Email or Password is Incorrect', 404);
  }

   const payload = { 
   'adminId': admin._id,
   'email': admin.email,
   'fullName': admin.fullName
   };

   const token = generateToken(payload, process.env.JWT_SECRET_KEY, expiresIn);

    return sendSuccessResponse(res, 'Admin Login successfully', { 
       token
    });
 
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const createBlog = async (req, res) => {
  try {

    const { content, author, imageUrl, redirectUrl } = req.body;
    const blog = new Blog({ content, author, imageUrl, redirectUrl });
    await blog.save();

    return sendSuccessResponse(res, 'Blog created successfully', blog, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    
    return sendSuccessResponse(res, 'Blogs retrieved successfully', blogs, 200);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return sendFailureResponse(res, 'Blog not found', 404);
    }

    return sendSuccessResponse(res, 'Blog deleted successfully', 200);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, author, imageUrl, redirectUrl } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { content, author, imageUrl, updatedAt: Date.now() }, 
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return sendFailureResponse(res, 'Blog not found', 404);
    }

    return sendSuccessResponse(res, 'Blog updated successfully', updatedBlog, 200);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};




module.exports = {
  createAdmin,
  loginAdmin,
  createBlog,
  getBlog,
  deleteBlog,
  updateBlog
};
