import React from 'react';

export default function Todo(props){
  return(
    <div className="card my-3">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h2>{props.props.todo}</h2>
            {!props.props.completed ? (<h4>Completed: false</h4>) : (<h4>Completed: true</h4>)}
            <p>{props.props.time}</p>
            {props.children}
          </div>
        </div>      
      </div>
    </div>
  )
}