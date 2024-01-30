import "./CommentCard.scss";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";

/**
 *
 * @param {comment: string, id: number}  props - The comment card properties object.
 * @returns display the recipe's comment on the recipe page.
 */

function CommentCard({ comment, id }) {
  const datTime = new Date(comment.date_time);
  const formattedDate = datTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="comment">
      <div className="comment__container">
        <img
          className="comment__userLogo__img"
          name="userLogo"
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/images/icone-user.svg`}
          alt="userLogo"
        />

        <div className="flex-items">
          <h2 className="comment__user__name">
            {comment.first_name} {comment.last_name}
          </h2>
          <StarBar id={id} />
        </div>
      </div>
      <p className="comment__text">{comment.comment}</p>
      <p className="comment__date">{formattedDate}</p>
    </div>
  );
}

CommentCard.propTypes = {
  id: PropTypes.number.isRequired,
  comment: PropTypes.shape({
    last_name: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    date_time: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }).isRequired,
};
export default CommentCard;
