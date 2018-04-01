const createDomFromString = (domString) => {
    const div = document.createElement('div')
    //真正的DOM操作在这里
    div.innerHTML = domString
    return div
}

export default createDomFromString