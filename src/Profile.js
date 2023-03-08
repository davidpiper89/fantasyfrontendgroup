// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import axios from "axios";

// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: 123,
//       userName: "",
//       email: "",
//       password: "",
//       avatar: "",
//       notificationEmails: false,
//       fantasy: {
//         teamName: "",
//         lineup: [
//           { playerId: 1, position: GKP },
//           { playerId: 2, position: DEF },
//           { playerId: 3, position: MID },
//           { playerId: 4, position: FWD },
//         ],
//         lastUpdateDate: Date.now(),
//       },
//     };
//   }

//   handleInput = (event) => {
//     event.preventDefault();
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({ [name]: value });
//   };

//   handleForm = (event) => {
//     event.preventDefault();
//     const data = {
//       userName: this.state.userName,
//       email: this.state.email,
//       password: this.state.password,
//       avatar: this.state.avater,
//       notificationEmails: this.state.notificationEmails,
//       fantasy: this.state.fantasy,
//     };

//   render() {
//     return (
//       <div className="container">
//         <Link to="./profile">
//           <p className="profileLi">Profile</p>
//         </Link>
//         <form className="profileForm" onSubmit={this.handleForm}>
//           <div className="userName">
//             <label>User Name</label>
//             <input
//               type="text"
//               name="userName"
//               placeholder="Enter User Name"
//               onChange={this.handleInput}
//               value={this.state.userName}
//             />
//           </div>
//           <div className="email">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email Address"
//               onChange={this.handleInput}
//               value={this.state.email}
//             />
//           </div>
//           <div className="password">
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               onChange={this.handleInput}
//               value={this.state.password}
//             />
//           </div>
//           <div className="submit">
//             <input type="submit" value="update" />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     userName: state.auth.user.userName,
//     email: state.auth.user.email,
//     password: state.auth.user.password,
//   };
// };
// export default connect(mapStateToProps, null)(Profile);
