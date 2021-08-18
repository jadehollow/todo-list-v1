exports.getLongDate = () => {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return today.toLocaleDateString("en-US", options);
}

/////

// exports.getWeekday = () => {
//     const today = new Date();
//     const options = {
//         weekday: "long",
//     };
    
//     return today.toLocaleDateString("en-US", options);
// }

