import React from "react";

import Comment from "./Comment";
import FilterItem from "./FilterItem";
import Details from "./Details";

const defaultComments = [
  {
    type: "surgery",
    user: {
      name: "Dr. Zaius",
      role: "Doctor",
      image: "//stevensegallery.com/75/75"
    },
    when: "2 Minutes Ago",
    content: "Please find attached the Medical report Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas, nisi vitae egestas convallis, sapien lacus luctus libero, eu vehicula enim quam id nunc. In volutpat ac urna ut volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam eros felis, sagittis a pretium a, euismod eu mauris. Suspendisse libero mi, mollis sed posuere a, vehicula sed tortor. Donec tristique nisl sit amet urna euismod tempor. Vestibulum non sagittis tortor. Quisque tempus maximus ex, quis semper mauris suscipit vehicula. Curabitur eget orci consectetur, efficitur nisi non, porttitor diam. Duis vitae leo eu mi mattis euismod in eget urna. Sed gravida nisi tristique dui pretium, vitae interdum neque sollicitudin. Etiam sollicitudin leo in arcu scelerisque posuere. In in arcu bibendum, tempus elit eget, vestibulum nunc. Quisque tempor venenatis pellentesque.",
    attachments: ["report.pdf", "certificate.pdf"]
  },
  {
    type: "general",
    user: {
      name: "Cameron Pavey",
      role: "Programmer",
      image: "//placecage.com/75/75"
    },
    when: "1 Day Ago",
    content: "This is just a normal note"
  },
  {
    type: "surgery",
    user: {
      name: "Cameron Pavey",
      role: "Programmer",
      image: "//placecage.com/75/75"
    },
    when: "2 Days ago",
    content:
      "The player has been to the doctor and I have been in contact, they said they will send through the report withina  few days"
  },
  {
    type: "surgery",
    user: {
      name: "Scott Warren",
      role: "Technical Director",
      image: "//fillmurray.com/75/75"
    },
    when: "4 Days ago",
    content:
      "The player needs to go to the good doctor to have a procedure. the doctor should provide a medical report"
  }
];

const colors = {
  general: "blue",
  surgery: "red",
  clear: "grey",
  nothing: "green"
};

export default class CommentStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: defaultComments,
      selectedComment: defaultComments[0]
    };
  }

  handleClick = type => {
    let comments;
    if (type === "clear") {
      comments = defaultComments;
    } else {
      comments = defaultComments.filter(comment => comment.type === type);
    }

    console.log(comments);

    this.setState({ comments, selectedComment: comments[0] });
  };

  handleCommentClick = index => {
    const comment = this.state.comments[index];
    this.setState({ selectedComment: comment });
  };

  render() {
    return (
      <div className="flex bg-grey-darkest w-screen h-screen flex-col overflow-hidden">
        {/* Comment Container */}
        <div className="flex flex-col bg-white p-4 m-4 rounded-lg flex-grow overflow-hidden">
          {/* Filter Control */}
          <ul className="list-reset flex flex-row border-b-2 py-4">
            {["clear", "general", "surgery", "nothing"].map(cat => (
              <FilterItem
                name={cat.charAt(0).toUpperCase() + cat.slice(1)}
                color={colors[cat]}
                handleClick={() => this.handleClick(cat)}
              />
            ))}
          </ul>
          {/* Actual Comments */}

          <div className="flex flex-row h-screen">
            {/* @as #commentList */}
            <ul className={`list-reset flex-grow overflow-y-scroll ${this.props.sidebar ? 'w-2/3' : null}`}>
              {this.state.comments.length > 0 ? (this.state.comments.map((comment, index) => (
                <Comment
                  key={index}
                  user={comment.user.name}
                  when={comment.when}
                  content={comment.content}
                  type={colors[comment.type]}
                  attachments={comment.attachments || null}
                  onClick={() => this.handleCommentClick(index)}
                />
              ))) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-grey-light">
                    No Notes match this filter.
                  </div>
                </div>
              )}
            </ul>
            {!this.props.sidebar ? null : (
              <Details comment={this.state.selectedComment} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
