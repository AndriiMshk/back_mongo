import Post from "./Post.js";

class PostService {
  async create(post) {
    return Post.create(post);
  }

  async getAll() {
    return Post.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('invalid id')
    }
    return Post.findById(id);
  }

  async update(id, post) {
    if (!id) {
      throw new Error('invalid id')
    } else {
      return Post.findByIdAndUpdate(id, post, {new: true})
    }
  }

  async delete(id) {
    if (!id) {
      throw new Error('invalid id')
    } else {
      return Post.findByIdAndDelete(id)
    }
  }
}

export default new PostService()