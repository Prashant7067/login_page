import React, { Component } from 'react'

export default class Forget extends Component {
  render() {
    return (
      <form>
        <h3>Reset Password</h3>
         

        <div className="mb-4">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </div>
        <p className="forgot-password text-right">
           <a href="/sign-in">sign in</a>
        </p>
      </form>
    )
  }
}