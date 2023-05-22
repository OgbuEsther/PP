import React from 'react'
import push from "react-push-notification";

const Push = () => {

    const notify = () => {
        push({
          title: "task completed",
          duration: 10000,
          vibrate: 1,
          message: "good one",
          subtitle: "do more task",
          icon: "✔",
          native: true,
        });
      };

      const checked = () =>{
        notify();
      }
  return (
    <div>
    <button onClick={notify}>
Click Me
    </button>
    </div>
  )
}

export default Push
