export function isEmpty (value) {
    switch (typeof value) {
    case 'string':
        if (value.length === 0) { return true } else { return false }
    case 'undefined':
        return true
    case 'null':
        return true
    default:
        return false
    }
}