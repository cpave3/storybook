import React from "react";
import UserStatus from "./UserStatus";

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <section className="p-4 bg-grey-light h-screen flex-row flex content-center items-center justify-center">
        <div className="container h-full">
          <div className="row h-full">
            <div className="col-md-5 h-full">
              <div className="bg-white rounded shadow p-4 h-full flex-col flex">
                <form action="" className="border-b pb-4 mb-4 flex-1">
                  <input
                    placeholder="Enter the next issue"
                    className="border inline-block w-5/6 p-3"
                  />
                  <button className="bg-green w-1/6 p-3 border border-green text-white">
                    Go
                  </button>
                </form>
                <div className="flex justify-around flex-wrap my-4 flex-1 flex-grow">
                  <UserStatus name="Cameron Pavey" locked={true} />
                  <UserStatus name="John Doe" />
                  <UserStatus name="John Doe" />
                  <UserStatus name="John Doe" />
                  <UserStatus name="John Doe" />
                  <UserStatus name="John Doe" locked={true}/>
                  <UserStatus name="John Doe" />
                  <UserStatus name="John Doe" />
                  <UserStatus name="John Doe" />
                </div>
                <div className="flex flex-row mt-10 border-t pt-4 flex-1">
                  <div className="w-full p-1">
                    <button className={`p-4 bg-red text-white block w-full ${ true ? 'bg-red-lighter cursor-not-allowed' : null}`} disabled>Close Submission</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="bg-white rounded shadow p-4 h-full">
                stats about submissions
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
