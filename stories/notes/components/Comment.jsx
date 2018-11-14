import React from "react";

const Comment = props => (
  <li
    className={`border-l-4 pl-4 my-2 py-2 border-${
      props.type
    } hover:bg-grey-lightest`}
  >
    <a onClick={props.onClick} className="block cursor-pointer">
      <div className="py-2">
        {props.user}{" "}
        
      </div>
      <div className="text-grey pb-2">
        <abbr title="2018-09-13 13:44:23">{props.when}</abbr>
      </div>
      <div className="pb-2 truncate mr-4">{props.content}</div>
      {!props.attachments ? null : (
          <span className="text-grey-light font-hairline">
            {" "}
            <i className="fa fa-paperclip " aria-hidden="true" />{" "}
            {props.attachments.length > 1
              ? `x ${props.attachments.length}`
              : null}
          </span>
        )}
    </a>
  </li>
);

export default Comment;
