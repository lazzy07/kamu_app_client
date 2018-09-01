export const openDrawerAction = () => {
    console.log("Open");
    return {type: "OPEN_DRAWER"}
}

export const closeDrawerAction = () => {
    console.log('close');
    return {type: "CLOSE_DRAWER"}
}