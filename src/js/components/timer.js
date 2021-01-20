const timer = (timeout = 0) => (
    new Promise((resolve) => {
      setTimeout(resolve, timeout);
      setTimeout(()=>{
      },timeout)
    })
);

export {timer}