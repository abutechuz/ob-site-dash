function stil (arg) {
  if (Number(arg) < 10) {
    return ["rgba(254, 0, 0, 0.8)", "rgba(254, 0, 0, 0.2)"]
  } else if (Number(arg) >= 10 && Number(arg) <= 40) {
    return ["rgba(254, 195, 0, 0.8)", "rgba(254, 195, 0, 0.2)"]
  } else {
    return ["rgba(41, 204, 150, 0.8)", "rgba(41, 204, 150, 0.2)"]
  }
}

export {
  stil,
}