let isSubString = (x, y) => {
    let i1 = 0
    while (i1 < y.length) {
        i1 = i1 + 1
        if (x[0] === y[i1 - 1]) {
            let i = 0
             let counter = 0
            while (i < x.length) {
                i = i + 1
                if (x[i - 1] === y[i1 - 1 + i - 1]) {
                    counter = counter + 1
                }
            }
            if (counter === x.length) {
                return true
            }
        }
    }
    return false
}