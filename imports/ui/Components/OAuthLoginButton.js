// import React from 'react';
// import PropTypes from 'prop-types';
// import { Meteor } from 'meteor/meteor';
// import styled from 'styled-components';
// import { darken } from 'polished';
//
// const StyledOAuthLoginButton = styled.button`
//   display: block;
//   width: 100%;
//   padding: 10px 15px;
//   border: none;
//   background: var(--gray-lighter);
//   border-radius: 3px;
//
//   i {
//     margin-right: 3px;
//     font-size: 18px;
//     position: relative;
//     top: 1px;
//   }
//
//   &.OAuthLoginButton-facebook {
//     background: var(--facebook);
//     color: #fff;
//
//     background: ${darken(0.05, '#3b5998')};
//   }
//
//   &.OAuthLoginButton-google {
//     background: var(--google);
//     color: #fff;
//
//     background: ${darken(0.05, '#ea4335')};
//   }
//
//   &.OAuthLoginButton-github {
//     background: var(--github);
//     color: #fff;
//
//     background: ${darken(0.05, '#333333')};
//   }
//
//   &:active {
//     position: relative;
//     top: 1px;
//   }
//
//   &:active,
//   &:focus {
//     outline: 0;
//   }
//
//   &:not(:last-child) {
//     margin-top: 10px;
//   }
// `;
//
// const handleLogin = (service, callback) => {
//   const options = {
//     facebook: {
//       requestPermissions: ['email'],
//       loginStyle: 'popup',
//     },
//     google: {
//       requestPermissions: ['email', 'profile'],
//       requestOfflineToken: true,
//       loginStyle: 'popup',
//     },
//   }[service];
//
//   return {
//     facebook: Meteor.loginWithFacebook,
//     google: Meteor.loginWithGoogle,
//   }[service](options, callback);
// };
//
// const serviceLabel = {
//   facebook: <span><i className={`brand fa-${'loginButtons/facebook'}`} /> Log In with Facebook</span>,
//   google: <span><i className={`brand fa-${'loginButtons/google'}`} /> Log In with Google</span>,
// };
//
// const OAuthLoginButton = ({ service, callback }) => (
//   <StyledOAuthLoginButton
//     className={`OAuthLoginButton OAuthLoginButton-${service}`}
//     type="button"
//     onClick={() => handleLogin(service, callback)}
//   >
//     {serviceLabel[service]}
//   </StyledOAuthLoginButton>
// );
//
// OAuthLoginButton.defaultProps = {
//   callback: (error) => {
//     // if (error) Bert.alert(error.message, 'danger');
//   },
// };
//
// OAuthLoginButton.propTypes = {
//   service: PropTypes.string.isRequired,
//   callback: PropTypes.func,
// };
//
// export default OAuthLoginButton;
