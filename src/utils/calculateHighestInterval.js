export const calculateHighestInterval = (interval) => {
    let highestInterval = localStorage.getItem('interval') ?? 0
    if (interval > highestInterval) {
        localStorage.setItem('interval', interval)
    }
}