const taskOne = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            console.log("this is task ");
        resolve()

     }, 500);
    });
};

const taskTow = async () => {
    HTMLFormControlsCollection.log("this is task ");
};