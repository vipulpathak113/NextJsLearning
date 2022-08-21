import { comment } from "../../../utils";

export default function handler(req, res) {
  res.status(200).json(comment);
}
