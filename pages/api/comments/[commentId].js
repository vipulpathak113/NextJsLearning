import { comment } from "../../../utils";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method == "DELETE") {
    let deletedComment = comment.find((item) => item.id == parseInt(commentId));

    let index = comment.findIndex((item) => item.id == parseInt(commentId));

    comment.splice(index, 1);

    res.status(200).json(deletedComment);
  }
}
