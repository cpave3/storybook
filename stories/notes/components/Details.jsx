import React from "react";

const Details = props =>
  // Flex containe
  props.comment ? (
    <div className="min-w-1/3 max-w-1/3 w-1/3">
      <div className="flex flex-col h-full content-start justify-start items-around">
        {/* Avatar */}
        <div className="flex-row flex items-end border-b-2 p-4">
          <img src={props.comment.user.image} className="rounded-lg" />
          <div className="flex flex-col ml-4 mb-2">
            <div className="text-2xl">{props.comment.user.name}</div>
            <div className="text-lg">{props.comment.user.role}</div>
          </div>
        </div>
        {/* Content */}
        <div
          className={`overflow-y-scroll p-4 ${
            props.comment.attachments ? "flex-2" : "flex-3"
          }`}
        >
          <p>{props.comment.content}</p>
        </div>
        {/* Attachments */}
        {!props.comment.attachments ? null : (
          <div className="border-t-2 p-2 flex-1">
            Attachments:
            <ul className="flex flex-row list-reset overflow-hidden">
              {props.comment.attachments.map((attachment, index) => (
                <li key={index} className="overflow-hidden w-24 text-center">
                  <div className="w-24 h-24 block bg-grey-light m-2 flex justify-center items-center flex-col">
                    <i className="fa fa-paperclip text-4xl text-grey-dark" />
                  </div>
                  <a href="//localhost:9001">{attachment}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center w-1/3">
      <div className="p-4 text-grey-light">Please select a note...</div>
    </div>
  );

export default Details;

// {/* User Info */}
// <div className="flex-row flex items-start border-b-2 mb-2 pb-4">
// <img src={props.comment.user.image} className="rounded-lg" />
// <div className="flex flex-col ml-4 mb-2">
//   <div className="text-2xl">{props.comment.user.name}</div>
//   <div className="text-lg">{props.comment.user.role}</div>
// </div>
// </div>
// {/* Text */}
// <div className=""><p>{props.comment.content}</p></div>
// {/* Attachments */}
