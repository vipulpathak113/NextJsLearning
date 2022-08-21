import { comment } from "../../../utils";

export default function handler(req, res) {

  if (req.method == "GET") {

    res.status(200).json(comment).end();

  } else if (req.method == "POST") {

    let body = req.body.comment;
    let newComment = {
      id: Date.now(),
      text: body,
    }
    
    res.status(201).json(newComment).end();
  }
}
